import { Link } from "react-router-dom";
import { categoryLinks, saleCards } from "../constant";

import Products from "./Products";

const TodaysPick = () => {
  const products = saleCards.map(
    ({ label, category, price, stock, description, image }, index) => (
      <Products
        key={index}
        label={label}
        category={category}
        price={price}
        stock={stock}
        description={description}
        image={image}
      />
    )
  );

  return (
    <div className="w-full h-auto p-10">
      <div className="w-full h-auto flex justify-center flex-col items-center gap-8 mb-10  max-md:gap-2">
        <div className="text-center max-w-[30rem] flex-wrap">
          <h2 className="text-2xl font-bold whitespace-pre text-black-text">
            Todays For You!
          </h2>

          <p className="text-base text-gray-text font-semibold">
            We have bunch of collection for you! let's go explore and find your
            dream business, make it happen
          </p>
        </div>

        <div className="w-auto h-auto flex justify-center items-center gap-2 flex-wrap max-sm:py-2">
          {categoryLinks.map(({ label, link }, key) => (
            <Link
              key={key}
              to={link}
              className={`px-6 py-1 rounded-lg capitalize border border-black text-sm max-sm:px-4 max-sm:py-1`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-auto grid grid-cols-5 max-[1330px]:grid-cols-4 max-[1080px]:grid-cols-3 max-[830px]:grid-cols-2 max-sm:grid-cols-1  gap-x-2 gap-y-6">
        {products}
      </div>
    </div>
  );
};

export default TodaysPick;
