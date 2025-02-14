import React from "react";

const Receipt = ({ checkOutItem }) => {
  const company = window.localStorage.getItem("company");
  return (
    <div className="w-1/2 h-full flex flex-col justify-start gap-5 border border-black bg-primary p-5">
      <h1 className="text-center text-lg font-bold uppercase text-black-text">
        {company}
      </h1>

      <div className="border border-dashed border-gray" />

      <div className="w-full h-auto flex flex-col gap-2 leading-5">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Product Name:</p>
          <p className="text-sm text-black-text font-bold uppercase">{`${checkOutItem.product}`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Product ID:</p>
          <p className="text-sm text-black-text font-bold">{`${checkOutItem.productId}`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Client ID:</p>
          <p className="text-sm text-black-text font-bold">{`${checkOutItem.clientId}`}</p>
        </div>

        <div className="border border-dashed border-gray" />

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Price:</p>
          <p className="text-sm text-black-text font-bold">{`₱${checkOutItem.price.toLocaleString()}`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Quantity:</p>
          <p className="text-sm text-black-text font-bold">{`${checkOutItem.quantity}x`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Discount:</p>
          <p className="text-sm text-black-text font-bold">{`${checkOutItem.priceAtSale}%`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-text font-medium">Total Price:</p>
          <p className="text-sm text-black-text font-bold">{`₱${checkOutItem.total.toLocaleString()}`}</p>
        </div>

        <div className="border border-dashed border-gray" />
      </div>
    </div>
  );
};

export default Receipt;
