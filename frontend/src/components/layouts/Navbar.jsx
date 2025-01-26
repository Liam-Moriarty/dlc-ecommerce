import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import logo from "../../assets/machine-learning-(1).png";
import profile from "../../assets/gear5th.png";

const Navbar = () => {
  return (
    <div className="w-full h-auto">
      {/* top side */}
      <div className="w-full flex justify-between items-center px-10 py-4 gap-4 max-md:hidden bg-primary border-b border-gray">
        {/* middle */}
        <div className="flex justify-start items-center w-full gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 object-cover" />

          <div className="flex justify-start items-center gap-2 w-[30rem] border border-gray rounded-full py-2 px-2">
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
          <div className="w-auto h-auto flex justify-end items-center gap-4 pr-3 border-r-2 border-gray">
            <FaShoppingCart className="text-xl text-black-text font-semibold cursor-pointer" />
            <FaBell className="text-xl text-black-text font-semibold cursor-pointer" />
          </div>

          <div className="flex justify-start items-center w-7 h-7 rounded-full cursor-pointer">
            <img
              src={profile}
              alt="profile image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
