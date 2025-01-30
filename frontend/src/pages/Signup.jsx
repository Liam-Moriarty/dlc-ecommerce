import React from "react";
import signupImg from "../assets/sign-up.webp";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="h-screen max-desktop:w-full bg-auth-main flex justify-center items-center">
      <div className="w-[60rem] h-[40rem] p-5 flex bg-auth-black gap-2 rounded-lg">
        <div className="relative w-full h-full rounded-lg">
          <img
            src={signupImg}
            alt="signup image"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 auth-gradient opacity-20 rounded-lg"></div>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
