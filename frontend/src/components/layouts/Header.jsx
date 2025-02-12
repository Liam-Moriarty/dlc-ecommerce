import React from "react";
import Button from "../Button";
import arrivalImg from "../../assets/test-3.png";

const Header = () => {
  return (
    <div className="px-10 max-md:px-5 py-5 h-[30rem] max-md:h-auto flex justify-between max-md:flex-col gap-4">
      {/* Left New Arrival Details */}
      <div className="max-w-[60rem] w-full p-10 max-lg:p-6 h-full bg-white rounded-3xl flex gap-2 items-center max-[480px]:flex-col">
        <div className="w-full flex-col items-start">
          <p className="text-2xl max-lg:text-xl text-black-text font-bold tracking-tight uppercase mb-8 max-lg:mb-6">
            New Arrival!
          </p>

          <h1 className="text-4xl max-lg:text-3xl text-black-text flex-wrap leading-tight font-bold tracking-tight uppercase mb-8 max-lg:mb-6">
            Scotsman Machines Just Arrived
          </h1>

          <p className="text-base flex-wrap font-medium text-gray-text tracking-tight capitalize leading-tight mb-8 max-lg:mb-6">
            Discover cutting-edge vending technology with our new, sleek, and
            convenient machines
          </p>

          <Button
            label="View Product"
            variant="primary"
            className="!rounded-full !py-2 max-lg:py-1 max-lg:px-4 max-lg:text-sm"
          />
        </div>

        <div className="w-full h-full max-lg:w-[20rem] max-lg:h-[17.5rem] max-md:w-full max-md:h-full">
          <img
            src={arrivalImg}
            alt="arrival image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Event Details */}
      <div className="w-[25rem] max-md:w-full p-10 h-full rounded-3xl flex flex-col justify-center items-start gap-2 event">
        <h1 className="relative z-30 text-2xl max-lg:text-xl text-primary flex-wrap font-bold tracking-tight leading-tight uppercase mb-8">
          Disc up to 50% for coffee vendo fest id 2025
        </h1>

        <p className="relative z-30 text-base max-lg:text-sm text-primary font-semibold tracking-tight capitalize mb-8 leading-normal">
          Join the vendo fest 2025 on 23th February, We have more fun gigs too
          and supported by freser
        </p>
      </div>
    </div>
  );
};

export default Header;
