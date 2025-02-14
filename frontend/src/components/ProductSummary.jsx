import React from "react";

const ProductSummary = ({ checkOutItem }) => {
  return (
    <div className="w-full h-auto flex justify-start items-start gap-2">
      <div className="w-28 h-full bg-gray rounded-md">
        <img
          src={checkOutItem.image}
          alt="product image"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-between gap-1 leading-tight">
        <h1 className="text-black-text font-semibold text-sm uppercase">
          {checkOutItem.product}
        </h1>
        <p className="text-black-text font-medium text-sm">
          {`Price: ₱${checkOutItem.price.toLocaleString()}`}
        </p>
        <p className="text-black-text font-medium text-sm">
          {`Discount ${checkOutItem.priceAtSale}%`}
        </p>
        <p className="text-black-text font-medium text-sm">
          {`Quantity: ${checkOutItem.quantity}x`}
        </p>
        <p className="text-black-text font-medium text-sm">
          {`Total: ₱${checkOutItem.total.toLocaleString()}`}
        </p>
      </div>
    </div>
  );
};

export default ProductSummary;
