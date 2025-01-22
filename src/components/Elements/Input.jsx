const Input = ({ name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="block my-4 font-medium">
        {name}
        <input
          type={name}
          className="block w-full rounded-lg border my-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sky-500 focus:ring-blue-500 ring-1 focus:outline-none"
          name={name}
          placeholder={placeholder}
          id={name}
        />
      </label>
    </>
  );
};

export default Input;
