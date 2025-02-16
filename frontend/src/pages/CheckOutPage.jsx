import ProductSummary from "../components/ProductSummary";
import Receipt from "../components/Receipt";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import ShippingDetails from "../components/ShippingDetails";

const CheckOutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkOutItem } = location.state || {};
  console.log(checkOutItem);

  const handleCheckoutItem = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  const handleCancelItem = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <div className="bg-primary w-full h-auto p-10 mb-10 max-md:p-5 max-md:mb-5">
      <div className="px-10 py-6 max-md:px-5 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl font-bold text-black-text uppercase">
            Checkout
          </h1>

          <p className="text-base font-medium text-gray-text capitalize">
            Please review your order details before proceeding to checkout.
          </p>
        </div>

        {/* Checkout Form */}
        <form>
          <div className="bg-white w-full h-auto p-5 rounded-lg flex justify-between items-start gap-4">
            {/* Left Side */}
            <div className="border bg-white w-full h-full p-5 flex flex-col items-start">
              <div className="w-full h-auto grid grid-cols-2 gap-2 mb-10">
                <div className="flex flex-col gap-1">
                  <h1 className="checkout-label">Product ID</h1>
                  <p className="text-base text-black-text font-normal">
                    {checkOutItem.productId}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="checkout-label">Client ID</h1>
                  <p className="text-base text-black-text font-normal">
                    {checkOutItem.clientId}
                  </p>
                </div>
              </div>

              {/* Product Summary */}
              <h1 className="checkout-label mb-5">Product Summary</h1>
              <ProductSummary checkOutItem={checkOutItem} />

              {/* Shipping details */}
              <ShippingDetails checkOutItem={checkOutItem} />

              <div className="flex justify-start items-center gap-4 my-10">
                <Button
                  label="Checkout"
                  variant="primary"
                  onClick={handleCheckoutItem}
                />
                <Button
                  label="Cancel"
                  variant="outline"
                  onClick={handleCancelItem}
                />
              </div>
            </div>

            {/* Receipt Side */}
            <Receipt checkOutItem={checkOutItem} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
