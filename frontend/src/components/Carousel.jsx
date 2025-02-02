import ProductsCarousel from "./ProductsCarousel";
import { carouselSettings, saleCards } from "../constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const product = saleCards.map(
    ({ label, category, price, stock, description, image, _id }) => (
      <ProductsCarousel
        key={_id}
        label={label}
        category={category}
        price={price}
        stock={stock}
        description={description}
        image={image}
        _id={_id}
      />
    )
  );

  return (
    <div className="py-5 px-10">
      <Slider {...carouselSettings}>{product}</Slider>
    </div>
  );
};

export default Carousel;
