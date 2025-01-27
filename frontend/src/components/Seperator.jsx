const Seperator = ({ imgSeperator, label, description }) => {
  return (
    <div className="relative flex w-full h-[20rem] my-10 rounded-3xl">
      <img
        src={imgSeperator}
        alt="seperator img"
        className="w-full h-full object-cover rounded-3xl"
      />

      <h2 className="absolute text-center inset-0 flex items-center justify-center text-black-text font-extrabold text-2xl max-sm:text-base text-wrap uppercase z-10 tracking-widest max-sm:tracking-normal flex-col">
        {label}
        <span className="text-black-text text-sm font-medium max-w-[30rem] capitalize mt-5">
          {description}
        </span>
      </h2>

      <div className="absolute inset-0 gradient-seperator opacity-75 rounded-3xl"></div>
    </div>
  );
};

export default Seperator;
