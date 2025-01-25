import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const authenticate = [
  { label: "Sign Up", path: "/sign-up" },
  { label: "Login", path: "/login" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full max-md:h-auto h-10 py-2 px-6 bg-primary border-b border-gray max-md:flex-col">
      {/* right side */}
      <div className="w-full h-auto flex justify-start items-center gap-2">
        <FaMobileScreenButton className="text-gray-text font-bold text-base" />
        <h1 className="text-gray-text font-bold text-base uppercase">
          enjoy shopping
        </h1>
      </div>

      {/* left side */}
      <div className="w-full flex justify-end items-center max-md:justify-start max-md:hidden">
        {links.map((link, key) => (
          <Link
            key={key}
            to={link.path}
            className="text-gray-text text-sm font-bold px-2 max-md:px-0 max-md:mr-4"
          >
            {link.label}
          </Link>
        ))}

        {authenticate.map((auth, key) => (
          <Link
            key={key}
            to={auth.path}
            className="text-black-text text-sm font-extrabold border-l border-black px-2"
          >
            {auth.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
