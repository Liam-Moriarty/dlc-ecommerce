import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/loginSlice";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.loginForm.email);
  const dispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);

  // const email = window.localStorage.getItem("email");

  const handleProfileDropdown = () => {
    setOpenProfile(!openProfile);
  };

  const splitEmail = email ? email.split("@")[0] : "User";

  console.log(splitEmail);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className="w-full h-auto relative flex justify-start items-center cursor-pointer py-2 px-4 bg-black rounded-full"
      onClick={handleProfileDropdown}
    >
      <p className="w-full text-sm font-semibold text-white-text text-center line-clamp-1">
        {email || "User"}
      </p>

      <div
        className={`flex flex-col dropdownProfile cursor-default ${
          openProfile ? "block" : "hidden"
        }`}
      >
        <div className="w-auto h-auto flex flex-col items-center">
          <p className="w-full text-sm font-semibold text-black-text text-center">
            Good Day!
          </p>
          {email ? (
            <h1 className="w-full text-sm font-medium text-black-text mb-2 text-center line-clamp-1 cursor-default capitalize">
              {splitEmail}
            </h1>
          ) : (
            <h1 className="w-full text-xs font-medium text-black-text mb-2 text-center line-clamp-1 cursor-default capitalize">
              User
            </h1>
          )}
        </div>

        <ul className="w-auto h-auto flex flex-col gap-2 items-center">
          <Link
            to="/profile"
            className="w-full text-sm font-medium text-black-text hover:text-gray-text text-center"
          >
            Profile
          </Link>

          <Link
            onClick={handleLogout}
            className="w-full text-sm font-medium text-black-text hover:text-gray-text text-center"
          >
            Logout
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
