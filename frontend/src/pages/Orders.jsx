import React from "react";
import { useGetClientOrdersQuery } from "../api/transactionApi";

const Orders = () => {
  const { data, isLoading, error } = useGetClientOrdersQuery();

  const orders = data || []; // Ensure orders is always an array

  const loadingHandler = () => {
    if (isLoading) {
      return (
        <div className="bg-primary flex flex-col items-start gap-2 rounded-xl">
          <p className="w-full text-base text-black-text font-bold">
            Loading...
          </p>
        </div>
      );
    } else if (error) {
      return (
        <div className="bg-primary flex flex-col items-start gap-2 rounded-xl">
          <p className="w-full text-base text-black-text font-bold">
            Error: {error.message}
          </p>
        </div>
      );
    } else {
      return (
        <div className="bg-primary flex flex-col items-start gap-2 rounded-xl">
          <p className="w-full text-base text-black-text font-bold">
            You dont have orders yet
          </p>
        </div>
      );
    }
  };

  return (
    <div className="bg-primary w-full h-auto p-10 max-md:p-5 mb-10">
      <div className="px-5 max-md:p-2 py-4 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        <h1 className="p-5 max-md:p-3 text-2xl max-md:text-xl text-black-text font-bold">
          Order Status
        </h1>

        {orders.length > 0 ? (
          orders.map((item) => {
            const statusIndicator = (status) => {
              if (status === "pending") {
                return `bg-gray`;
              } else if (status === "completed") {
                return `bg-green-500`;
              } else if (status === "returned") {
                return `bg-blue-500`;
              } else if (status === "cancelled") {
                return `bg-rose-500`;
              }
            };

            return (
              <div
                key={item._id}
                className="w-full h-[17rem] max-sm:h-auto bg-primary px-10 py-6 max-md:px-5 flex flex-row max-sm:flex-col items-start gap-2 rounded-xl"
              >
                <div className="w-[20rem] max-sm:w-full h-full bg-gray rounded-xl">
                  <img
                    src={item.productId.image}
                    alt="product image"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="w-full h-full bg-white flex flex-col items-start justify-between gap-2 rounded-xl p-5 max-md:py-5 max-md:px-2 leading-tight">
                  <p className="text-lg font-bold text-black-text uppercase">
                    {item.productId.product}
                  </p>

                  <p className="text-lg font-bold text-black-text uppercase">
                    {`₱${item.price.toLocaleString()}`}
                  </p>

                  <p className="text-sm font-medium text-gray-text capitalize">
                    {item.productId.category}
                  </p>

                  <p className="text-sm font-medium text-gray-text capitalize flex justify-center items-center gap-1">
                    Quantity:{" "}
                    <span className="text-black-text">{`${item.quantity}x`}</span>
                  </p>

                  <p className="text-sm font-medium text-gray-text capitalize flex justify-center items-center gap-1">
                    Total:
                    <span className="text-black-text">{`${item.total.toLocaleString()}`}</span>
                  </p>

                  <p
                    className={`py-2 px-3 border-none rounded-md capitalize leading-tight text-sm font-semibold text-black-text ${statusIndicator(
                      item.statusOrder
                    )}`}
                  >
                    {item.statusOrder}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-primary mb-[10rem] px-10 py-10 flex flex-col items-start gap-2 rounded-xl">
            {loadingHandler()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
