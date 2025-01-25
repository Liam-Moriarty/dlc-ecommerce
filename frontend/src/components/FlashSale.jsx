import { useEffect, useRef, useState } from "react";
import { FaTags } from "react-icons/fa";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Button from "../components/Button";

const FlashSale = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("January 31, 2025 12:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours.toString().padStart(2, "0"));
        setMinutes(minutes.toString().padStart(2, "0"));
        setSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="w-full h-auto flex justify-between gap-3 items-center max-lg:flex-col max-lg:items-start p-10">
      {/* left side */}
      <div className="flex justify-start items-center gap-4 max-sm:gap-2">
        <div className="flex justify-center items-center max-sm:gap-1 gap-2">
          <span className="max-sm:w-8 max-sm:h-8 w-10 h-10 rounded-full flex justify-center items-center bg-black">
            <FaTags className="text-white-text text-lg max-sm:text-sm font-bold" />
          </span>

          <h3 className="text-2xl max-sm:text-xl text-black-text font-bold whitespace-pre">
            Flash Sale
          </h3>
        </div>

        <div className="flex justify-center items-center gap-2 max-sm:gap-1">
          <span className="max-sm:w-7 max-sm:h-7 w-9 h-9 p-1 max-sm:p-0 rounded-full flex justify-center items-center bg-red text-white-text text-sm max-sm:text-xs font-bold">
            {hours}
          </span>

          <span className="text-black font-bold text-lg">:</span>

          <span className="max-sm:w-7 max-sm:h-7 w-9 h-9 p-1 max-sm:p-0 rounded-full flex justify-center items-center bg-red text-white-text text-sm max-sm:text-xs font-bold">
            {minutes}
          </span>

          <span className="text-black font-bold text-lg">:</span>

          <span className="max-sm:w-7 max-sm:h-7 w-9 h-9 p-1 max-sm:p-0 rounded-full flex justify-center items-center bg-red text-white-text text-sm max-sm:text-xs font-bold">
            {seconds}
          </span>
        </div>
      </div>

      {/* right side */}
      <div className="max-lg:w-full flex justify-center items-center  max-lg:justify-end gap-4">
        <Button
          icon={
            <LiaLongArrowAltLeftSolid className="text-3xl max-sm:text-xl font-bold" />
          }
          variant="outline"
        />

        <Button
          icon={
            <HiMiniArrowLongRight className="text-3xl max-sm:text-xl font-bold" />
          }
          variant="primary"
        />
      </div>
    </div>
  );
};

export default FlashSale;
