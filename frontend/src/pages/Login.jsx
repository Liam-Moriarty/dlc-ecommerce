import React from "react";
import loginImg from "../assets/login-illustration.png";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen max-desktop:w-full bg-auth-main flex justify-center items-center p-5">
      <div className="w-[60rem] h-[40rem] p-5 flex bg-auth-black gap-2 rounded-lg">
        <div className="relative w-full h-full rounded-lg">
          <img
            src={loginImg}
            alt="login image"
            className="w-full h-full object-contain rounded-lg"
          />

          <div className="absolute inset-0 auth-gradient opacity-20 rounded-lg"></div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
