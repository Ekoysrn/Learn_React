const Button = ({ type, text, style }) => {
  return (
    <button
      className= {`h-10 px-6 my-4 font-semibold w-full rounded-md border text-slate-900 ${style}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

