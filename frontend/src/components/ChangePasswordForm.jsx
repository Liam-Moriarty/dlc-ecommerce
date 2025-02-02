import React, { useState } from "react";
import Button from "./Button";
import { useChangePasswordMutation } from "../api/profileApi";
import { useDispatch } from "react-redux";
import { logout } from "../auth/loginSlice";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordChange, setPasswordChange] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const [changePassword] = useChangePasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { currentPassword, password, confirmPassword } = passwordChange;

      const payload = {
        currentPassword,
        password,
        confirmPassword,
      };

      const result = await changePassword(payload).unwrap();

      console.log(result);

      if (result) {
        dispatch(logout());
        navigate("/login");
      }

      setPasswordChange({
        currentPassword: "",
        password: "",
        confirmPassword: "",
      });
      setError("");
    } catch (error) {
      const errorMessage = error?.data?.message || "Something went wrong";
      setError(errorMessage);
    }
  };

  const handleChange = (e) => {
    setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
  };
  return (
    <div className="px-10 py-6 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
      {/* top side */}
      <div className="flex justify-between items-center w-full h-auto">
        <h1 className="text-lg font-bold text-black-text capitalize">
          Change Company Password
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-1/2 max-md:w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="profile-label">Current Password</p>
            <input
              type="password"
              className="profile-input"
              name="currentPassword"
              onChange={handleChange}
              value={passwordChange.currentPassword}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="profile-label">New Password</p>
            <input
              type="password"
              className="profile-input"
              name="password"
              onChange={handleChange}
              value={passwordChange.password}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="profile-label">Confirm Password</p>
            <input
              type="password"
              className="profile-input"
              name="confirmPassword"
              onChange={handleChange}
              value={passwordChange.confirmPassword}
            />
          </div>
        </div>

        <p className="text-blue-500 font-semibold text-sm max-md:text-xs text-center mt-3 capitalize">
          Successfullly changing password will automatically logout!!
        </p>

        {error && (
          <p className="text-red-text font-semibold text-sm max-md:text-xs text-center mt-3 capitalize">
            {error}
          </p>
        )}

        <div className="my-5">
          <Button
            label="Submit"
            variant="primary"
            submit
            className="max-md:text-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
