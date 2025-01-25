import Carousel from "../components/Carousel";
import FlashSale from "../components/FlashSale";
import TodaysPick from "../components/TodaysPick";
import BestSellingBrands from "../components/BestSellingBrands";

import imgSeperator from "../assets/home-seperator.jpg";

const Home = () => {
  return (
    <div className="bg-primary w-full h-auto">
      <div className="bg-white w-full h-auto">
        <FlashSale />
        <Carousel />
      </div>

      <div className="relative flex w-full h-[20rem] my-10">
        <img
          src={imgSeperator}
          alt="seperator img"
          className="w-full h-full object-cover"
        />

        <h2 className="absolute inset-0 flex items-center justify-center text-white-text font-extrabold text-2xl max-sm:text-base text-wrap uppercase z-10 tracking-widest max-sm:tracking-normal">
          living the brand experience
        </h2>

        <div className="absolute inset-0 gradient-seperator opacity-75"></div>
      </div>

      <div className="bg-white w-full h-auto mb-10">
        <TodaysPick />
      </div>

      <div className="bg-white w-full h-auto mb-10">
        <BestSellingBrands />
      </div>
    </div>
  );
};

export default Home;
