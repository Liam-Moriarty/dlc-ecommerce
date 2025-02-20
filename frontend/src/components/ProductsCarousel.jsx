import { memo, useEffect, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import Button from "./Button";
import { Link } from "react-router-dom";
import {
  useAddFavoritesMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} from "../api/favoritesApi";

const ProductsCarousel = memo(
  ({ product, category, price, quantityInStock, description, image, _id }) => {
    const [addFavorites] = useAddFavoritesMutation();
    const [deleteFavorite] = useDeleteFavoriteMutation();
    const { data, isSuccess } = useGetFavoritesQuery();

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
      if (isSuccess && data) {
        const isFavorite = data.favorites.some(
          (fav) => fav.productsId?._id === _id
        );
        setFavorite(isFavorite);
      }
    }, [isSuccess, data, _id]);

    const handleFavorite = async () => {
      if (!favorite) {
        await addFavorites({ productsId: _id });
        setFavorite(true);
      } else {
        await deleteFavorite({ productsId: _id });
        setFavorite(false);
      }
    };

    return (
      <div className="rounded-xl h-[21rem] bg-primary flex flex-col">
        <div className="relative bg-gray rounded-t-xl w-full h-[12rem]">
          <img
            src={image}
            alt="product image"
            className="w-full h-full object-cover rounded-t-xl pt-2"
          />

          <Button
            variant="outline"
            icon={
              <FaHeart
                className={`text-lg ${
                  favorite ? "text-red-text " : "text-gray-text "
                }`}
              />
            }
            className="absolute top-2 right-2 bg-white border-none px-1.5 py-1.5"
            onClick={handleFavorite}
          />
        </div>

        <div className="relative w-full h-full flex flex-col p-4 capitalize rounded-b-xl">
          <div className="flex justify-between items-center gap-2">
            <span className="line-clamp-1 text-sm text-black-text font-semibold">
              {category}{" "}
            </span>

            <span className="flex justify-start items-center text-sm text-red-text font-semibold whitespace-pre">
              <MdOutlineArrowUpward /> {quantityInStock} left
            </span>
          </div>

          <span className="line-clamp-1 text-sm text-black-text font-semibold">
            {product}
          </span>

          <span className="line-clamp-2 text-sm text-black-text font-semibold capitalize">
            {description}
          </span>

          <Link
            to={`/product-details/${_id}`}
            className="absolute bottom-2 left-2 text-xs font-semibold flex justify-center items-center whitespace-pre gap-2 rounded-md py-1 bg-black px-2 text-white-text border border-black hover:bg-black-hover"
          >{`₱ ${Number(price).toLocaleString()}`}</Link>
        </div>
      </div>
    );
  }
);

export default ProductsCarousel;
