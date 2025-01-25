import { useState } from "react";
import { Link } from "react-router-dom";
import { categoryLinks, saleCards } from "../constant";
import Button from "./Button";
import { MdOutlineArrowUpward } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const TodaysPick = () => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  return (
    <div className="w-full h-auto p-10">
      <div className="w-full h-auto flex justify-between items-center mb-10 max-md:flex-col max-md:items-start max-md:gap-2">
        <h2 className="text-2xl font-bold whitespace-pre text-black-text">
          Todays For You!
        </h2>

        <div className="w-full h-auto flex justify-end items-center gap-4 max-sm:gap-2  overflow-hidden overflow-x-auto max-sm:justify-start max-sm:py-2">
          {categoryLinks.map(({ label, link }, key) => (
            <Link
              key={key}
              to={link}
              className={`px-6 py-2 rounded-md capitalize border border-black text-sm max-sm:px-4 max-sm:py-1 ${({
                isActive,
              }) => (isActive ? "bg-black" : "bg-transparent")}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-auto grid grid-cols-5 max-[1330px]:grid-cols-4 max-[1080px]:grid-cols-3 max-[830px]:grid-cols-2 max-sm:grid-cols-1  gap-x-2 gap-y-6">
        {saleCards.map(
          ({ label, category, price, stock, description, image }, key) => (
            <div
              key={key}
              className="col-span-1 shadow-lg rounded-xl h-[21rem] bg-primary flex flex-col"
            >
              <div className="relative bg-gray rounded-t-xl w-full h-[12rem]">
                <img
                  src={image}
                  alt="product image"
                  className="w-full h-full object-cover rounded-t-xl pt-2"
                />

                <Button
                  variant="outline"
                  icon={
                    <FaHeart
                      className={`text-lg ${
                        favorite ? "text-red-text " : "text-gray-text "
                      }`}
                    />
                  }
                  className="absolute top-2 right-2 bg-white border-none px-1.5 py-1.5"
                  onClick={handleFavorite}
                />
              </div>

              <div className="relative w-full h-full flex flex-col p-4 capitalize rounded-b-xl">
                <div className="flex justify-between items-center gap-2">
                  <span className="line-clamp-1 text-sm text-black-text font-semibold">
                    {category}{" "}
                  </span>

                  <span className="flex justify-start items-center text-sm text-red-text font-semibold whitespace-pre">
                    <MdOutlineArrowUpward /> {stock} left
                  </span>
                </div>

                <span className="line-clamp-1 text-sm text-black-text font-semibold">
                  {label}
                </span>

                <span className="line-clamp-2 text-sm text-black-text font-semibold capitalize">
                  {description}
                </span>

                <Button
                  variant="primary"
                  label={`₱ ${Number(price).toLocaleString()}`}
                  className="absolute bottom-2 left-2 text-xs font-semibold !px-2"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TodaysPick;
