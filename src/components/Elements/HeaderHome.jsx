import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./MyButton";

const HeaderNavHome = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };
  const email = localStorage.getItem("email");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("passw");

    logout();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white shadow-md p-3">
      <div className="text-sky-400 font-medium flex items-stretch">
        <h3>{email}</h3>
        {email ? (
          <>
            <button
              onClick={toggleDropdown}
              className="mx-1 flex items-center justify-center relative"
            >
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <form
                action=""
                onSubmit={handleLogout}
                className="bg-transparent backdrop-blur-md p-4 rounded-md w-60 text-center absolute z-10 top-10"
              >
                <p className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Account
                </p>
                <p className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Settings
                </p>
                <Button
                  text="logout"
                  type="submit"
                  style="text-red-400 hover:text-red-500"
                />
              </form>
            )}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <span className="mx-1">|</span>
            <Link to="/register">sign up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderNavHome;
