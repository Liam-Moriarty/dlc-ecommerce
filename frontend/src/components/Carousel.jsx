import Products from "./Products";
import { saleCards } from "../constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  let settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "80px",
          infinite: true,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
          infinite: true,
        },
      },
      {
        breakpoint: 388,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const product = saleCards.map(
    ({ label, category, price, stock, description, image }, key) => (
      <Products
        label={label}
        category={category}
        price={price}
        stock={stock}
        description={description}
        image={image}
        key={key}
      />
    )
  );

  return (
    <div className="py-5 px-10">
      <Slider {...settings}>{product}</Slider>
    </div>
  );
};

export default Carousel;
