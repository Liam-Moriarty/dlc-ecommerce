import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginUserMutation } from "../api/authenticatonApi";
import { createLogin } from "../auth/loginSlice";

const LoginForm = () => {
  const loginState = useSelector((state) => state.logoutForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginForm;

    try {
      const payload = { email, password };

      const result = await loginUser(payload).unwrap();

      console.log("Login result : ", result);

      localStorage.setItem("token", result.result);
      localStorage.setItem("email", result.email);

      setLoginForm({
        email: "",
        password: "",
      });
      setError("");
      dispatch(createLogin({ email: result.email, token: result.result }));
      navigate("/");
    } catch (error) {
      const errorMessage = error?.data?.message || "Something went wrong";
      setError(errorMessage);
    }
  };

  const handleChange = (e) => {
    if (!error) {
      setError("");
    }

    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="w-full h-full p-5 flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-center text-auth-white-text font-bold uppercase leading-tight">
        Login to DLC
      </h1>

      {/* Inputs */}
      <div className="w-[20rem] h-auto flex flex-col gap-2 my-10">
        <div
          className={`input-auth-container ${
            error === "Email or Password is empty" ||
            error === "Email doesn't exist"
              ? "input-error"
              : null
          }`}
        >
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="input-auth"
            onChange={handleChange}
            value={loginForm.email}
          />
        </div>

        <div
          className={`input-auth-container ${
            error === "Email or Password is empty" ||
            error === "Invalid password"
              ? "input-error"
              : null
          }`}
        >
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input-auth"
            onChange={handleChange}
            value={loginForm.password}
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
        Dont have an account?{" "}
        <Link to="/sign-up" className="text-auth-primary-text underline italic">
          Register here!
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
