import React from "react";
import logo from "../../assets/machine-learning-(1).png";

import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  const icons = [
    { icon: <FaFacebook className="text-black-text" /> },
    { icon: <FaFacebookMessenger className="text-black-text" /> },
    { icon: <FaSquareXTwitter className="text-black-text" /> },
    { icon: <FaSquareInstagram className="text-black-text" /> },
  ];
  return (
    <div className="px-10 max-md:px-5 h-[25rem] max-lg:h-auto">
      <div className="w-full p-10 max-md:p-5 h-full bg-white rounded-t-3xl flex flex-col justify-between items-start">
        {/* top side */}
        <div className="w-full h-auto flex justify-between items-start max-md:flex-col">
          {/* left side */}
          <div className="flex flex-col w-auto h-auto gap-2">
            <div className="flex justify-start items-center gap-2">
              <img src={logo} alt="logo" className="w-10 h-10 object-cover" />

              <h3 className="text-base font-bold text-black-text">
                DLC. CORP.
              </h3>
            </div>

            <div className="flex justify-start gap-2 items-center">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-primary rounded-md flex justify-center items-center border border-black"
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="max-w-[40rem] w-full flex flex-col gap-5 max-md:my-10">
            <p className="text-base font-semibold text-black-text text-wrap">
              Proudly providing solutions to some of the world's largest food
              companies
            </p>

            <div className="grid grid-cols-2 max-[550px]:grid-cols-1 gap-2 max-[550px]:gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-text font-semibold text-lg capitalize">
                  Contact Us:
                </h3>
                <p className="text-black-text font-medium text-base">
                  sale@dlc.com.ph
                </p>
                <p className="text-black-text font-medium text-base">
                  Tel: 0917-1232987
                </p>
                <p className="text-black-text font-medium text-base">
                  Tel: 0917-1087388
                </p>
                <p className="text-black-text font-medium text-base">
                  Line: 632-79872987
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-gray-text font-semibold text-lg capitalize">
                  Our Address:
                </h3>
                <p className="text-black-text font-medium text-base capitalize text-wrap">
                  unit 4A, high pointe building 1184 don chino roces avenue
                  brgy. san antonio, makati city 1203
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom side */}
        <div className="w-full h-auto flex justify-between items-center max-md:flex-col max-md:gap-5">
          {/* left side */}
          <div className="w-full flex flex-col items-start">
            <h3 className="capitalize text-black-text font-semibold text-base">
              Move faster with us!
            </h3>
            <p className="capitalize text-black-text font-medium text-sm">
              Make your idea into reality with DLC Equipment Corporation
            </p>
          </div>

          {/* right side */}
          <div className="w-full flex justify-end items-center max-md:justify-start">
            <MdOutlineCopyright className="text-black-text text-sm" />

            <p className="capitalize text-black-text font-medium text-xs">
              DLC. CORP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
