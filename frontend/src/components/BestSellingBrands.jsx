import React from "react";
import taglineImg from "../assets/shopping-bag.png";

import { sellingBrands } from "../constant";

const BestSellingBrands = () => {
  return (
    <div className="w-full h-auto p-10 max-md:p-10">
      <h2 className="text-center text-2xl font-bold tracking-wide text-black-text uppercase mb-5">
        Best Selling Brands
      </h2>

      <div className="w-full flex justify-start lg:justify-center max-md:flex-col max-md:items-center gap-5">
        {/* Left side */}
        <div className="w-[20rem] max-sm:w-full h-auto max-md:h-[25rem] bg-gray rounded-lg flex flex-col justify-center items-center py-2 px-4">
          <img
            src={taglineImg}
            alt="tagline photo"
            className="w-[12rem] h-auto object-cover"
          />
          <h2 className="text-xl text-black-text font-extrabold text-center">
            DLC. CORP
          </h2>
          <p className="text-base text-black-text font-semibold text-center capitalize">
            Shop, Explore, delight and experience magic!!
          </p>
        </div>

        {/* Right side */}
        <div className="max-lg:flex-1 grid grid-cols-2 max-lg:grid-cols-1 max-md:w-full h-auto gap-4">
          {sellingBrands.map(({ brand, tagline, icon, image }, key) => (
            <div
              key={key}
              className="w-[19rem] max-lg:w-full h-[12rem] max-lg:h-auto flex flex-col p-5 gap-4 bg-primary shadow-xl rounded-lg"
            >
              <div className="w-full h-auto flex justify-start items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-gray flex justify-center items-center">
                  {icon}
                </span>

                <div className="flex flex-col gap-1 leading-5 max-lg:leading-tight">
                  <h2 className="text-base max-[447px]:text-lg text-black-text font-semibold line-clamp-1 capitalize">
                    {brand}
                  </h2>
                  <p className="text-sm max-[447px]:text-base text-gray-text font-semibold line-clamp-1">
                    {`"${tagline}"`}
                  </p>
                </div>
              </div>

              <div className="w-auto h-auto flex flex-wrap justify-start items-center gap-2 max-[447px]:justify-center">
                {image.map((img, key) => (
                  <img
                    key={key}
                    src={img}
                    alt="brand image"
                    className="w-[5rem] max-[447px]:w-[12rem] max-md:w-[10rem] h-[5rem] max-md:h-auto bg-gray object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingBrands;
