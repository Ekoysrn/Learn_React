
const Button = ({ type = "button", text, style, onclick }) => {
  return (
    <button
      className={`font-semibold rounded-md text-slate-900 ${style}`}
      type={type}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
