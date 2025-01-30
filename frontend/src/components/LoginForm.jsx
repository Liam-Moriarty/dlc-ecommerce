import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="w-full h-full p-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center text-auth-white-text font-bold uppercase leading-tight">
        Login to DLC
      </h1>

      {/* Inputs */}
      <div className="w-[20rem] h-auto flex flex-col gap-2 my-10">
        <div className="input-auth-container">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input-auth"
          />
        </div>

        <div className="input-auth-container">
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input-auth"
          />
        </div>
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
