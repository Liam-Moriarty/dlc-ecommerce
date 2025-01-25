import { categories } from "../constant";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full h-[8rem] flex justify-start gap-10 items-center py-6 px-8 overflow-hidden overflow-x-auto">
      {categories.map((items, key) => (
        <div
          key={key}
          className="w-auto h-auto flex justify-center items-center flex-col gap-2"
        >
          <Link
            to={items.path}
            className="w-16 h-16 bg-gray flex justify-center items-center rounded-full"
          >
            {items.image ? (
              <img
                src={items.image}
                alt="category image"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="w-16 h-16 bg-white border border-gray rounded-full flex justify-center items-center">
                {items.icon}
              </span>
            )}
          </Link>
          <p className="text-sm text-black font-semibold text-center capitalize whitespace-pre">
            {items.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
