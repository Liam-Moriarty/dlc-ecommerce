import React, { useState } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

import { BiSolidCategory } from "react-icons/bi";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoMdAdd, IoMdRemove, IoMdUndo } from "react-icons/io";

import { useAddToCartMutation, useGetProductByIdQuery } from "../api/cartApi";
import Toast from "../components/Toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const [addToCart] = useAddToCartMutation();

  const [addItemToCart, setAddItemToCart] = useState({
    productId: id,
    quantity: 1,
  });
  const [isError, setIsError] = useState("");

  const totalPrice = product?.price * addItemToCart.quantity;

  const handleIncrementQuantity = () => {
    setAddItemToCart((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const handleDecrementQuantity = () => {
    setAddItemToCart((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));
  };

  const handleReseteQuantity = () => {
    setAddItemToCart((prev) => ({ ...prev, quantity: 1 }));
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const { productId, quantity } = addItemToCart;

      const payload = { productId, quantity };

      const result = await addToCart(payload).unwrap();

      Toast("success", "Successfully Added to Cart!!");

      console.log("result", result);

      console.log("payload : ", payload);
    } catch (error) {
      const errorMessage = error?.data?.message || "Something Went Wrong";
      setIsError(errorMessage);
    }
  };

  const handleBuyItem = () => {};

  if (isLoading) {
    return (
      <div className="bg-primary w-full h-auto p-10 mb-10">
        <div className="px-10 py-6 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-primary w-full h-auto p-10 mb-10">
        <div className="px-10 py-6 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
          <h2>Error: {error.message}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary w-full h-auto p-10 mb-10 max-md:p-5 max-md:mb-5">
      <div className="px-10 py-6 max-md:px-5 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        <div className="w-full h-auto flex justify-between items-center max-md:h-auto max-md:flex-col gap-5">
          {/* product image */}
          <div className="md:max-w-[30rem] w-full h-full max-md:h-[15rem] bg-gray rounded-lg shadow-lg">
            <img
              src={product.image}
              alt="product image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* product details */}
          <div className="w-full h-full flex flex-col justify-between gap-3 p-10 max-md:p-5  rounded-lg">
            <h1 className="text-4xl max-lg:text-2xl font-bold text-black-text uppercase leading-tight">
              {product.product}
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
                {product.quantityInStock}{" "}
                <span className="text-gray-text font-medium">Stocks left</span>
              </p>
            </div>

            <h2 className="text-4xl max-lg:text-lg font-bold text-black-text uppercase leading-tight">
              {`₱ ${Number(product.price).toLocaleString()}`}
            </h2>

            <div className="flex flex-start items-center gap-2 max-sm:gap-1">
              <div className="flex flex-start items-center gap-2 max-sm:gap-1">
                <p className="text-base max-lg:text-sm font-semibold text-black-text capitalize">
                  Quantity
                </p>

                <Button
                  variant="outline"
                  icon={<IoMdAdd className="text-xs text-black-text" />}
                  className="!px-2"
                  onClick={handleIncrementQuantity}
                />
                <Button
                  variant="outline"
                  icon={<IoMdRemove className="text-xs text-black-text" />}
                  className="!px-2"
                  onClick={handleDecrementQuantity}
                />
                <Button
                  variant="outline"
                  icon={<IoMdUndo className="text-xs text-black-text" />}
                  className="!px-2"
                  onClick={handleReseteQuantity}
                />

                <p className="w-full text-base max-lg:text-sm text-black-text font-bold px-2">
                  {addItemToCart.quantity}
                </p>
              </div>
            </div>

            <h2 className="text-lg max-lg:text-base font-bold text-black-text leading-tight">
              {`Total: ₱${Number(totalPrice).toLocaleString()}`}
            </h2>

            <div className="w-full h-auto flex flex-col items-center gap-2">
              <Button
                label="Buy item"
                variant="primary"
                className="py-2 max-sm:py-1 max-md:text-sm w-full"
                onClick={handleBuyItem}
              />
              <Button
                label="Add to cart"
                variant="outline"
                className="py-2 max-sm:py-1 max-md:text-sm w-full"
                onClick={handleAddToCart}
              />
            </div>

            {isError && (
              <div className="w-full flex justify-center items-center relative">
                <p className="absolute -bottom-3 text-red-text font-semibold text-xs text-center capitalize">
                  {isError}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
