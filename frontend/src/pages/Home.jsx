import Carousel from "../components/Carousel";
import FlashSale from "../components/FlashSale";
import TodaysPick from "../components/TodaysPick";
import BestSellingBrands from "../components/BestSellingBrands";
import Seperator from "../components/Seperator";

const Home = () => {
  return (
    <div className="bg-primary w-full h-auto px-10 py-5">
      <div className="bg-white w-full h-auto rounded-3xl">
        <FlashSale />
        <Carousel />
      </div>

      <Seperator />

      <div className="bg-white w-full h-auto mb-10 rounded-3xl">
        <TodaysPick />
      </div>

      <div className="bg-white w-full h-auto rounded-3xl">
        <BestSellingBrands />
      </div>
    </div>
  );
};

export default Home;
