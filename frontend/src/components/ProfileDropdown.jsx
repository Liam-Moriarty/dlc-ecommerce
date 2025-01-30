import React, { useState } from "react";
import profile from "../assets/gear5th.png";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const handleProfileDropdown = () => {
    setOpenProfile(!openProfile);
  };

  const dropdownLinks = [
    { label: "Profile", path: "/profile" },
    { label: "Logout", path: "/login" },
  ];
  return (
    <div
      className="relative flex justify-start items-center w-7 h-7 rounded-full cursor-pointer"
      onClick={handleProfileDropdown}
    >
      <img
        src={profile}
        alt="profile image"
        className="w-full h-full rounded-full object-cover"
      />

      <div
        className={`flex flex-col dropdownProfile cursor-default ${
          openProfile ? "block" : "hidden"
        }`}
      >
        <div className="w-auto h-auto flex flex-col gap-2 items-center">
          <img
            src={profile}
            alt="profile image"
            className="w-7 h-7 rounded-full object-cover cursor-default"
          />
          <h1 className="w-full text-xs font-medium text-black-text mb-2 text-center line-clamp-1 cursor-default">
            Moriarty
          </h1>
        </div>

        <ul className="w-auto h-auto flex flex-col gap-2 items-center">
          {dropdownLinks.map(({ label, path }, index) => (
            <Link
              key={index}
              to={path}
              className="w-full text-sm font-medium text-black-text hover:text-gray-text text-center"
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
