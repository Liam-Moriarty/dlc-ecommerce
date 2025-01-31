import React from "react";
import signupImg from "../assets/signup-illustration.png";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="w-full h-screen max-desktop:w-full bg-auth-main flex justify-center items-center p-5">
      <div className="w-[60rem] h-[40rem] max-md:w-full max-md:h-auto p-5 flex bg-auth-black gap-2 rounded-lg">
        <div className="relative w-full h-full rounded-lg max-md:hidden">
          <img
            src={signupImg}
            alt="signup image"
            className="w-full h-full object-contain rounded-lg"
          />

          <div className="absolute inset-0 auth-gradient opacity-20 rounded-lg"></div>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
