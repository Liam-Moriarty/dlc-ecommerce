import Client from "../models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// UPDATE PROFILE INFORMATION
export const updateProfile = async (req, res) => {
  try {
    const { email, ...updateData } = req.body;

    // Email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    const updateProfile = await Client.findByIdAndUpdate(
      req.client._id,
      { $set: { ...updateData, ...(email && { email }) } }, // Only update fields present in req.body
      { new: true }
    );

    res.status(200).json({ status: "Success", results: { updateProfile } });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message || "Validation failed",
      });
    }

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      const value = error.keyValue[field];
      return res.status(400).json({
        message: `The ${field} "${value}" is already in use. Please use a different ${field}.`,
      });
    }

    res.status(400).json({ status: "Failed", message: error.message });
  }
};

// UPDATE PASSWORD INFORMATION
export const changePassword = async (req, res) => {
  try {
    // Validate if the body contains all required fields
    const { currentPassword, password, confirmPassword } = req.body;

    if (!currentPassword || !password || !confirmPassword) {
      return res.status(400).json({
        status: "Failed",
        message: "All fields are required!!",
      });
    }

    const client = await Client.findById(req.client._id).select("+password");

    const verified = await bcrypt.compare(
      req.body.currentPassword,
      client.password
    );

    if (!client || !verified) {
      return res.status(400).json({
        status: "Failed",
        message: "Client not found or invalid current password",
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({
        status: "Failed",
        message: "Password didn't match",
      });
    }

    client.password = req.body.password;
    client.confirmPassword = req.body.confirmPassword;

    await client.save();

    const jwtToken = jwt.sign({ id: client._id }, process.env.SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({ id: "Success", results: { jwtToken } });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to update password please try again",
    });
  }
};
