import { IoSearchSharp, IoBagCheck } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";

import logo from "../../assets/machine-learning-(1).png";
import ProfileDropdown from "../ProfileDropdown";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-auto">
      {/* top side */}
      <div className="w-full flex justify-between items-center px-10 py-4 gap-4 max-md:hidden bg-primary border-b border-gray">
        {/* middle */}
        <div className="flex justify-start items-center w-full gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-cover cursor-pointer"
            onClick={handleHomeNavigation}
          />

          <div className="flex justify-start items-center gap-2 max-w-[30rem] w-full border border-gray rounded-full py-2 px-2">
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
            <Link to="/favorites" className="w-auto h-auto">
              <FaHeart className="text-xl text-black-text font-semibold cursor-pointer" />
            </Link>

            <Link to="/cart" className="w-auto h-auto">
              <FaShoppingCart className="text-xl text-black-text font-semibold cursor-pointer" />
            </Link>

            <Link to="/orders" className="w-auto h-auto">
              <BsBagCheckFill className="text-xl text-black-text font-semibold cursor-pointer" />
            </Link>
          </div>

          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
