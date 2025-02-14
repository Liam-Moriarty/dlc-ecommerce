import React, { useEffect, useState } from "react";
import Button from "./Button";

const PaymentMethod = ({ selectedPaymentMethod, setSelectedPaymentMethod }) => {
  const handlePaymentMethod = (e) => {
    e.preventDefault();
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-2 mb-10">
      <h1 className="checkout-label">Payment Method</h1>

      <div className="w-full h-auto flex justify-start items-start flex-wrap gap-4 max-sm:gap-2">
        <Button
          label="COD"
          variant={`${selectedPaymentMethod === "cod" ? "primary" : "outline"}`}
          className="!px-6 max-sm:w-full"
          name="cod"
          value="cod"
          onClick={handlePaymentMethod}
        />
        <Button
          label="G-Cash"
          variant={`${
            selectedPaymentMethod === "g-cash" ? "primary" : "outline"
          }`}
          className="!px-6 max-sm:w-full"
          name="g-cash"
          value="g-cash"
          onClick={handlePaymentMethod}
        />
        <Button
          label="Card"
          variant={`${
            selectedPaymentMethod === "card" ? "primary" : "outline"
          }`}
          className="!px-6 max-sm:w-full"
          name="card"
          value="card"
          onClick={handlePaymentMethod}
        />
      </div>

      <h1 className="checkout-label">
        You select: <span className="capitalize">{selectedPaymentMethod}</span>
      </h1>
    </div>
  );
};

export default PaymentMethod;
