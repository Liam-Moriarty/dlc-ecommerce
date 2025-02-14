import ProductInformation from "../components/ProductInformation";

const ProductDetails = () => {
  return (
    <div className="bg-primary w-full h-auto p-10 mb-10 max-md:p-5 max-md:mb-5">
      <div className="px-10 py-6 max-md:px-5 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        {/* product details */}
        <ProductInformation />
      </div>
    </div>
  );
};

export default ProductDetails;
