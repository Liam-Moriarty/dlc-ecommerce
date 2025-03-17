import Client from "../models/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// SIGN-UP CONTROLLER
export const signUp = async (req, res) => {
  try {
    const { company, contacts, email, password, confirmPassword, city } =
      req.body;

    const emptyFields = [];
    const fields = [
      "company",
      "contacts",
      "email",
      "password",
      "confirmPassword",
      "city",
    ];

    fields.forEach((field) => {
      if (!req.body[field]) {
        emptyFields.push(field);
      }
    });

    if (emptyFields.length > 0) {
      return res
        .status(400)
        .json({ message: "Please fill in all the fields", emptyFields });
    }

    // Email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email!!" });
    }

    // Contacts validation: Ensure it is 10 digits and starts with 9
    if (!/^9\d{9}$/.test(contacts)) {
      return res.status(400).json({
        message: "Contacts must be a 10-digit number starting with 9",
      });
    }

    const client = await Client.create({
      company,
      contacts,
      email,
      password,
      confirmPassword,
      city,
    });

    // Implement jwt to the header and payload
    const jwtToken = jwt.sign({ id: client._id }, process.env.SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({ status: "Success", results: { client, jwtToken } });
  } catch (error) {
    if (error.name === "ValidationError") {
      if (error.errors.confirmPassword) {
        return res.status(400).json({ message: "password didn't match" });
      }
    }

    if (error.name === "ValidationError") {
      if (error.errors.email) {
        return res.status(400).json({ message: "Please enter a valid email" });
      }
    }

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      const value = error.keyValue[field];
      return res.status(400).json({
        message: `Email is already use try another one`,
      });
    }

    res.status(400).json({ status: "Failed", message: error.message });
  }
};

// LOGIN CONTROLLER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // Validation to check if the input is empty or not
    if (!email || !password) {
      throw Error("Email or Password is empty");
    }

    const client = await Client.findOne({ email }).select("+password");

    if (!client) {
      throw Error("Email doesn't exist");
    }

    const verified = await bcrypt.compare(password, client.password);

    if (!verified) {
      throw Error("Invalid password");
    }

    const jwtToken = jwt.sign({ id: client._id }, process.env.SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      email: client.email,
      result: jwtToken,
      company: client.company,
      contacts: client.contacts,
      city: client.city,
      clientId: client._id,
    });
  } catch (error) {
    res.status(400).json({ status: "Failed", message: error.message });
  }
};

// PROTECT ROUTES
export const protectRoutes = async (req, res, next) => {
  // check if the client is authorized to see the data
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ status: "Failed", message: "Access Token is missing" });
    }

    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        return res
          .status(401)
          .json({ status: "Failed", message: "Invalid Token" });
      }

      const client = await Client.findById(decodedToken.id);

      if (!client) {
        return res
          .status(401)
          .json({ status: "Failed", message: "Client doesn't exist" });
      }

      const passwordVerified = client.verifyPassword(decodedToken.iat);

      if (passwordVerified) {
        return res.status(401).json({
          status: "Failed",
          message: "Client change password please login again",
        });
      }

      req.client = client;
      next();
    });
  } else {
    return res.status(401).json({ status: "Failed", message: "Unauthorized" });
  }
};

// TEST GET CLIENTS
export const getClients = async (req, res) => {
  try {
    const client = await Client.find({}).sort({ company: 1 });
    res.status(200).json({ status: "Success", results: client });
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
