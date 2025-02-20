import React from "react";
import { useGetFavoritesQuery } from "../api/favoritesApi";
import Products from "../components/Products";

const Favorites = () => {
  const { data, isLoading, error } = useGetFavoritesQuery();

  const product = data ? data.favorites : [];

  const loading = isLoading && "Loading...";
  const isError = error && `${error}`;

  const products =
    product.length > 0 ? (
      product.map((item) => {
        const {
          product,
          category,
          price,
          quantityInStock,
          description,
          image,
          _id,
        } = item.productsId;

        return (
          <Products
            key={item._id}
            product={product}
            category={category}
            price={price}
            quantityInStock={quantityInStock}
            description={description}
            image={image}
            _id={_id}
          />
        );
      })
    ) : (
      <p className="text-base text-black-text font-medium">
        {loading ? loading : null}
        {isError ? error : null}
      </p>
    );

  return (
    <div className="bg-primary w-full h-auto p-10 max-md:p-5 mb-10">
      <div className="px-5 max-md:p-2 py-4 rounded-3xl bg-white w-full h-auto flex flex-col gap-4">
        <h1 className="p-5 max-md:p-3 text-2xl max-md:text-xl text-black-text font-bold">
          Your Favorites
        </h1>

        <div className="w-full h-auto grid grid-cols-5 max-[1330px]:grid-cols-4 max-[1080px]:grid-cols-3 max-[830px]:grid-cols-2 max-sm:grid-cols-1  gap-x-2 gap-y-6">
          {products}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
