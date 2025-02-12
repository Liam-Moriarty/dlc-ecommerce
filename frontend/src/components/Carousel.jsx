import ProductsCarousel from "./ProductsCarousel";
import { useGetAllProductsQuery } from "../api/productsApi";

import { carouselSettings } from "../constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  const loading = isLoading && "Loading...";

  const isError = error && `${error}`;

  const product =
    data && data.length > 0 ? (
      data.map(
        ({
          product,
          category,
          price,
          quantityInStock,
          description,
          image,
          _id,
        }) => (
          <ProductsCarousel
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
    <div className="py-5 px-10 max-md:px-5">
      <Slider {...carouselSettings}>{product}</Slider>
    </div>
  );
};

export default Carousel;
