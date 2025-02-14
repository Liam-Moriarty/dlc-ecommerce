import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import PaymentMethod from "./PaymentMethod";
import Toast from "./Toast";

import { useAddToCartMutation, useGetProductByIdQuery } from "../api/cartApi";

import { BiSolidCategory } from "react-icons/bi";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoMdAdd, IoMdRemove, IoMdUndo } from "react-icons/io";

const ProductInformation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const [addToCart] = useAddToCartMutation();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cod");
  const [addItemToCart, setAddItemToCart] = useState({
    productId: id,
    quantity: location.state?.quantity || 1,
  });
  const [isError, setIsError] = useState("");

  //  to calculate totalCost of item
  const price = product?.price;
  const quantity = addItemToCart.quantity;
  const discount =
    product?.priceAtSale && product?.priceAtSale !== "no discount"
      ? parseFloat(product?.priceAtSale) / 100
      : 0;

  const discountAmount = price * discount;
  const discountedPrice = price - discountAmount;
  const totalCost = discountedPrice * quantity;

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
      console.log(error);
    }
  };

  const handleBuyItem = (e) => {
    e.preventDefault();

    const checkOutItem = {
      clientId: window.localStorage.getItem("_id"),
      productId: product?._id || "",
      product: product?.product || "",
      image: product?.image || "",
      price: product?.price || "",
      quantity: addItemToCart?.quantity || "",
      priceAtSale: product?.priceAtSale || "",
      total: totalCost,
      paymentMethod: selectedPaymentMethod,
      statusOrder: "pending",
      saleDate: new Date().toISOString(),
    };

    navigate(`/checkout/${id}`, { state: { checkOutItem } });
  };

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
    <div className="w-full h-[40rem] flex justify-between items-start max-[576px]:h-[45rem] max-[500px]:h-auto max-[500px]:flex-col gap-5">
      {/* product image */}
      <div className="md:max-w-[28rem] w-full h-full bg-gray rounded-lg">
        <img
          src={product.image}
          alt="product image"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-between gap-3 px-10 max-md:p-5">
        <h1 className="text-4xl max-lg:text-2xl font-bold text-black-text uppercase leading-tight">
          {product.product}
        </h1>

        <h2 className="text-4xl max-lg:text-lg font-bold text-black-text uppercase leading-tight">
          {`₱ ${Number(product.price).toLocaleString()}`}
        </h2>

        <p className="text-base max-lg:text-sm font-medium text-black-text capitalize">
          {product.description}
        </p>

        <div className="flex justify-start items-center gap-2">
          <p className="text-base max-lg:text-sm font-medium text-black-text capitalize line-clamp-1">
            {product.category}
          </p>
          <BiSolidCategory className="text-base max-lg:text-sm font-medium text-black-text" />
        </div>

        <div className="flex justify-start items-center">
          <p className="text-base max-lg:text-sm font-medium text-black-text capitalize">
            Stocks left:{" "}
            <span className="text-black-text">{product.quantityInStock}</span>
          </p>
          <FaArrowUpLong className="text-base max-lg:text-sm font-medium text-black-text" />
        </div>

        <div className="flex justify-start items-center">
          <p className="text-base max-lg:text-sm font-medium text-black-text capitalize">
            Discount:{" "}
            <span className="text-black-text">{`${product.priceAtSale}%`}</span>
          </p>
        </div>

        <div className="flex flex-start items-center gap-2 max-sm:gap-1">
          <div className="flex flex-start items-center gap-2 max-sm:gap-1">
            <p className="text-base max-lg:text-sm font-medium text-black-text capitalize">
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

            <p className="w-full text-base max-lg:text-sm text-black-text font-medium px-2">
              {addItemToCart.quantity}
            </p>
          </div>
        </div>

        <h2 className="text-lg max-lg:text-base font-medium text-black-text leading-tight">
          Total:{" "}
          <span className="text-black-text">{`₱${totalCost.toLocaleString()}`}</span>
        </h2>

        <PaymentMethod
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />

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
  );
};

export default ProductInformation;
