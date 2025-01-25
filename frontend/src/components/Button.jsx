const Button = ({ variant, className, onClick, submit, label, icon }) => {
  const baseStyle =
    "flex justify-center items-center whitespace-pre gap-2 rounded-md py-1";

  const variants = {
    primary:
      "bg-black px-6 text-white-text border border-black hover:bg-black-hover",
    outline:
      "bg-transparent border border-black px-4 hover:bg-white-hover text-black-text",
  };

  const buttonStyle = `${baseStyle} ${variants[variant] || ""} ${className}`;
  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      submit={submit ? "submit" : "button"}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
