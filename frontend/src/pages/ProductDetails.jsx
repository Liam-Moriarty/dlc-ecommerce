import React from "react";
import { useParams } from "react-router-dom";
import { saleCards } from "../constant";

import { BiSolidCategory } from "react-icons/bi";
import { FaArrowUpLong } from "react-icons/fa6";
import Button from "../components/Button";

const ProductDetails = () => {
  const { id } = useParams();

  const product = saleCards.find((p) => p._id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  console.log(product);

  return (
    <div className="bg-primary w-full h-auto p-10 mb-10">
      <div className="px-10 py-6 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        <div className="w-full h-[30rem] flex justify-between items-center max-md:h-auto max-md:flex-col gap-5">
          {/* product image */}
          <div className="md:max-w-[30rem] w-full h-full max-md:h-[15rem] bg-gray rounded-lg shadow-lg">
            <img
              src={product.image}
              alt="product image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* product details */}
          <div className="w-full h-full flex flex-col justify-between gap-3 p-10 shadow-lg rounded-lg">
            <h1 className="text-4xl max-lg:text-2xl font-bold text-black-text uppercase leading-tight line-clamp-1">
              {product.label}
            </h1>

            <div className="flex justify-start items-center gap-2">
              <BiSolidCategory className="text-base max-lg:text-sm font-medium text-gray-text" />
              <p className="text-base max-lg:text-sm font-medium text-gray-text capitalize line-clamp-1">
                {product.category}
              </p>
            </div>

            <p className="text-base max-lg:text-sm font-medium text-black-text capitalize">
              {product.description}
            </p>

            <div className="flex justify-start items-center">
              <FaArrowUpLong className="text-base max-lg:text-sm font-medium text-black-text" />
              <p className="text-base max-lg:text-sm font-semibold text-black-text capitalize">
                {product.stock}{" "}
                <span className="text-gray-text font-medium">Stocks left</span>
              </p>
            </div>

            <h2 className="text-4xl max-lg:text-2xl font-bold text-black-text uppercase leading-tight">
              {`₱ ${Number(product.price).toLocaleString()}`}
            </h2>

            <div className="w-full h-auto flex flex-col items-center gap-2">
              <Button
                label="Buy item"
                variant="primary"
                className="py-2 max-sm:py-1 max-md:text-sm w-full"
              />
              <Button
                label="Add to cart"
                variant="outline"
                className="py-2 max-sm:py-1 max-md:text-sm w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
