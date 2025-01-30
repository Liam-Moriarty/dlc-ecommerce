import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSignupUserMutation } from "../api/authenticatonApi";
import { cleanSignUp, createSignup } from "../auth/signupSlice";

const SignupForm = () => {
  const signUpState = useSelector((state) => state.signupForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupUser] = useSignupUserMutation();

  const [signUpForm, setSignUpForm] = useState({
    company: signUpState.company || "",
    contacts: signUpState.contacts || "",
    email: signUpState.email || "",
    password: signUpState.password || "",
    confirmPassword: signUpState.confirmPassword || "",
    city: signUpState.city || "",
    passwordChangeDate: new Date(),
  });
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  useEffect(() => {
    setSignUpForm((prev) => ({ ...prev, passwordChangeDate: new Date() }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { company, contacts, email, password, confirmPassword, city } =
      signUpForm;

    try {
      const payload = {
        company,
        contacts,
        email,
        password,
        confirmPassword,
        city,
        passwordChangeDate: new Date(),
      };

      const result = await signupUser(payload).unwrap();

      // store the token into local storage
      localStorage.setItem("signup", JSON.stringify(result));

      console.log("User signed up successfully:", result);

      setSignUpForm({
        company: "",
        contacts: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
      });
      dispatch(cleanSignUp());
      setError("");
      setEmptyFields([]);
      navigate("/login");
    } catch (error) {
      // Extract error message from the backend response
      const errorMessage = error?.data?.message || "Something went wrong";
      const emptyFieldsMessage =
        error?.data?.emptyFields || "Something went wrong";

      setError(errorMessage);
      setEmptyFields(emptyFieldsMessage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!error) {
      setError("");
    }

    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    dispatch(createSignup({ [name]: value }));
  };

  return (
    <form
      className="w-full h-full p-5 flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-center text-auth-white-text font-bold uppercase leading-tight">
        Create Account
      </h1>

      {/* Inputs */}
      <div className="w-[20rem] h-auto flex flex-col gap-2 my-10">
        <div
          className={`input-auth-container ${
            emptyFields.includes("company") ? "input-error" : null
          }`}
        >
          <input
            type="text"
            placeholder="What company?"
            name="company"
            className="input-auth"
            onChange={handleChange}
            value={signUpForm.company.toLowerCase()}
          />
        </div>

        <div
          className={`input-auth-container ${
            emptyFields.includes("contacts") ? "input-error" : null
          }`}
        >
          <input
            type="text"
            placeholder="How can we contact you?"
            name="contacts"
            className="input-auth"
            onChange={handleChange}
            value={signUpForm.contacts}
          />
        </div>

        <div
          className={`input-auth-container ${
            emptyFields.includes("email") ? "input-error" : null
          }`}
        >
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="input-auth"
            onChange={handleChange}
            value={signUpForm.email}
          />
        </div>

        <div
          className={`input-auth-container ${
            emptyFields.includes("password") ? "input-error" : null
          }`}
        >
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input-auth"
            onChange={handleChange}
            value={signUpForm.password}
          />
        </div>

        <div
          className={`input-auth-container ${
            emptyFields.includes("confirmPassword") ? "input-error" : null
          }`}
        >
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            className="input-auth"
            onChange={handleChange}
            value={signUpForm.confirmPassword}
          />
        </div>

        <div
          className={`input-auth-container ${
            emptyFields.includes("city") ? "input-error" : null
          }`}
        >
          <input
            type="text"
            placeholder="Where are you located?"
            name="city"
            className="input-auth"
            onChange={handleChange}
            value={signUpForm.city.toLowerCase()}
          />
        </div>

        {error && (
          <p className="text-red-text font-semibold text-xs text-center mt-3 capitalize">
            {error}
          </p>
        )}
      </div>

      <Button
        label="Submit"
        submit
        variant="primary"
        className="!bg-auth-primary-button !text-auth-white-text text-sm !p-2 !w-[20rem]"
      />

      <p className="text-xs mt-5 text-auth-gray-text font-light">
        Already have an account?{" "}
        <Link to="/login" className="text-auth-primary-text underline italic">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
