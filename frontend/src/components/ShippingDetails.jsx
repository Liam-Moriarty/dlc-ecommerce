import React from "react";

const ShippingDetails = ({ checkOutItem }) => {
  const company = window.localStorage.getItem("company");
  const email = window.localStorage.getItem("email");
  const contacts = window.localStorage.getItem("contacts");
  const city = window.localStorage.getItem("city");

  return (
    <div className="w-full flex flex-col my-5">
      <h1 className="checkout-label mb-5">Shipping Details</h1>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 mb-5">
          <div className="w-full h-auto flex flex-col gap-1">
            <h1 className="checkout-label">Company Name</h1>
            <p className="text-base text-black-text font-normal capitalize">
              {company}
            </p>
          </div>

          <div className="w-full h-auto flex flex-col gap-1">
            <h1 className="checkout-label">Company Email</h1>
            <p className="text-base text-black-text font-normal">{email}</p>
          </div>

          <div className="w-full h-auto flex flex-col gap-1">
            <h1 className="checkout-label">Company Contacts</h1>
            <p className="text-base text-black-text font-normal">{contacts}</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="w-full h-auto flex flex-col gap-1">
            <h1 className="checkout-label">Address</h1>
            <p className="text-base text-black-text font-normal capitalize">
              {city} city
            </p>
          </div>

          <div className="w-full h-auto flex flex-col gap-1">
            <h1 className="checkout-label">Mode of Payment</h1>
            <p className="text-base text-black-text font-normal capitalize">
              {checkOutItem.paymentMethod}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
