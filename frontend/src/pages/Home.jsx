import Carousel from "../components/Carousel";
import FlashSale from "../components/FlashSale";
import TodaysPick from "../components/TodaysPick";
import BestSellingBrands from "../components/BestSellingBrands";
import Seperator from "../components/Seperator";

import imgSeperator from "../assets/home-seperator.jpg";
import imgSeperator2 from "../assets/footer-seperator.jpg";

const Home = () => {
  return (
    <div className="bg-primary w-full h-auto px-10 py-5 max-md:px-5">
      <div className="bg-white w-full h-auto rounded-3xl">
        <FlashSale />
        <Carousel />
      </div>

      <Seperator
        imgSeperator={imgSeperator}
        label="living the brand experience"
        description="creating authentic and memorable interactions at every touchpoint,
          fostering a deep connection with the audience."
      />

      <div className="bg-white w-full h-auto mb-10 rounded-3xl">
        <TodaysPick />
      </div>

      <div className="bg-white w-full h-auto rounded-3xl">
        <BestSellingBrands />
      </div>

      <Seperator
        imgSeperator={imgSeperator2}
        label="bringing you to update fantastic vendo machines"
        description="promises the latest, cutting-edge vending technology to elevate your experience and meet your needs."
      />
    </div>
  );
};

export default Home;
