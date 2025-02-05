import { Link } from "react-router-dom";
import { categoryLinks } from "../constant";

import Pagination from "./Pagination";
import Products from "./Products";

import { useGetPaginatedProductsQuery } from "../api/productsApi";
import { useState } from "react";

const TodaysPick = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error } = useGetPaginatedProductsQuery({
    page: page || 1,
    limit: limit || 10,
  });

  const paginatedData = data ? data.product : [];
  const totalPages = data?.totalPages ? Math.ceil(data.totalPages) : 1;
  const currentPages = data ? data.currentPage : [];

  const loading = isLoading && "Loading...";
  const isError = error && `${error}`;

  const products =
    paginatedData && paginatedData.length > 0 ? (
      paginatedData.map(
        ({
          product,
          category,
          price,
          quantityInStock,
          description,
          image,
          _id,
        }) => (
          <Products
            key={_id}
            product={product}
            category={category}
            price={price}
            quantityInStock={quantityInStock}
            description={description}
            image={image}
            _id={_id}
          />
        )
      )
    ) : (
      <p className="text-base text-black-text font-medium">
        {loading ? loading : null}
        {isError ? error : null}
      </p>
    );

  return (
    <div className="w-full h-auto p-10 flex flex-col gap-8">
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

      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        currentPages={currentPages}
      />
    </div>
  );
};

export default TodaysPick;
