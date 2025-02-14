import { useNavigate, useParams } from "react-router-dom";
import { useGetCartQuery, useRemoveToCartMutation } from "../api/cartApi";

import Button from "../components/Button";
import Toast from "../components/Toast";

import { IoMdTrash, IoIosCart } from "react-icons/io";

const Cart = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCartQuery();
  const [removeToCart] = useRemoveToCartMutation();
  const cartData = data?.cart ? data.cart : [];

  const loading = isLoading && "Loading...";
  const isError = error && `${error}`;
  const emptyCart = data?.cart === undefined || [] ? "No Items in Cart" : null;

  console.log(cartData);

  const handleRemoveItem = async (id) => {
    try {
      const result = await removeToCart(id).unwrap();

      Toast("error", result.message);

      console.log(result);
    } catch (error) {
      const errorMessage = error?.data?.message || "Something Went Wrong";
      console.log(errorMessage);
    }
  };

  const handleBuyItem = (id, quantity) => {
    navigate(`/product-details/${id}`, { state: { quantity } });
  };

  return (
    <div className="bg-primary w-full h-auto p-10 max-md:p-5 mb-10">
      <div className="px-5 max-md:p-2 py-4 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        <h1 className="p-5 max-md:p-3 text-2xl max-md:text-xl text-black-text font-bold">
          Shopping Cart
        </h1>

        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const { image, product, category, price, priceAtSale, _id } =
              item.productId;

            // calculate total cost of the item
            const calculateTotalPrice = () => {
              const quantity = item.quantity;
              const discount =
                priceAtSale && priceAtSale !== "no discount"
                  ? parseFloat(priceAtSale) / 100
                  : 0;

              const discountAmount = price * discount;
              const discountedPrice = price - discountAmount;
              const totalCost = discountedPrice * quantity;

              const totalPrice = totalCost.toLocaleString();
              return totalPrice;
            };

            return (
              <div
                key={index}
                className="w-full h-[17rem] max-sm:h-auto bg-primary px-10 py-6 max-md:px-5 flex flex-row max-sm:flex-col items-start gap-2 rounded-xl"
              >
                <div className="w-[20rem] max-sm:w-full h-full bg-gray rounded-xl">
                  <img
                    src={image}
                    alt="product image"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="w-full h-full bg-white flex flex-col items-start justify-between gap-2 rounded-xl p-5 max-md:py-5 max-md:px-2 leading-tight">
                  <p className="text-lg font-bold text-black-text uppercase">
                    {product}
                  </p>

                  <p className="text-lg font-bold text-black-text uppercase">
                    {`₱${price.toLocaleString()}`}
                  </p>

                  <p className="text-sm font-medium text-gray-text capitalize">
                    {category}
                  </p>

                  <p className="text-sm font-medium text-gray-text capitalize flex justify-center items-center gap-1">
                    Quantity:{" "}
                    <span className="text-black-text">{`${item.quantity}`}</span>
                  </p>

                  <p className="text-sm font-medium text-gray-text capitalize flex justify-center items-center gap-1">
                    Total:
                    <span className="text-black-text">{`₱${calculateTotalPrice()}`}</span>
                  </p>

                  <div className="w-full flex justify-start items-center flex-wrap gap-2">
                    <Button
                      variant="primary"
                      icon={
                        <IoIosCart className="text-base max-sm:text-xs text-white-text font-bold" />
                      }
                      label="Buy Item"
                      className="!px-3 !py-2 max-md:!px-2 max-md:text-sm max-sm:w-full"
                      onClick={() => handleBuyItem(_id, item.quantity)}
                    />
                    <Button
                      variant="delete"
                      icon={
                        <IoMdTrash className="text-base max-sm:text-xs text-black-text" />
                      }
                      label="Delete to Cart"
                      className="!px-3 !py-2 max-md:!px-2 max-md:text-sm max-sm:w-full"
                      onClick={() => handleRemoveItem(_id)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-primary mb-[10rem] px-10 py-10 flex flex-col items-start gap-2 rounded-xl">
            <p className="w-full text-base text-black-text font-bold">
              {loading ? loading : null}
              {isError ? error : null}
              {!loading ? emptyCart : null}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
