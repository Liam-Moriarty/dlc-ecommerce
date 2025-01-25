import { banner } from "../constant";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  return (
    <div className="w-full h-auto">
      {/* top side */}
      <div className="w-full flex justify-between items-center px-6 py-4 gap-4 max-md:hidden bg-primary border-b border-gray">
        {/* left */}
        <div className="flex justify-center items-center w-auto">
          <h3 className="text-nowrap text-black-text font-bold text-2xl uppercase">
            DLC. CORPORATION
          </h3>
        </div>

        {/* middle */}
        <div className="w-full mx-6">
          <div className="flex justify-start items-center gap-2 w-full border border-gray rounded-xl py-2 px-2">
            <IoSearchSharp className="text-base text-gray-text font-semibold" />
            <input
              type="text"
              className="outline-none bg-transparent w-full h-full"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="w-auto h-auto flex justify-end items-center gap-4">
          <FaShoppingCart className="text-xl text-gray-text font-semibold" />
          <FaBell className="text-xl text-gray-text font-semibold" />
        </div>
      </div>

      {/* bottom side */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[30rem] rounded-b-3xl"
      >
        {banner.map((items, key) => (
          <SwiperSlide key={key}>
            <div className="w-full h-[30rem] rounded-b-3xl">
              <div className="w-full h-full banner-gradient flex justify-between px-6 py-10 md:gap-10 gap-5 rounded-b-3xl">
                <div className="leading-relaxed w-full flex justify-center items-start flex-col">
                  <p className="lg:text-2xl text-lg text-gray-text font-semibold">
                    #{items.tag}
                  </p>
                  <h2 className="lg:text-5xl text-3xl text-black-text font-bold uppercase">
                    {items.label}
                  </h2>
                </div>

                <div className="w-full h-full p-10 rounded-xl">
                  <img
                    src={items.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
