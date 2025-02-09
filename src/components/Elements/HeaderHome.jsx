import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./MyButton";
import sun from "/sun.svg";
import moon from "/moon.svg";
import hamburger from "/hamburger.svg";
import close from "/close.svg";
import Sidebar from "./sidebar";

const HeaderNavHome = ({svg, handleSideBar}) => {
  const navigate = useNavigate();

  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => setdarkMode(!darkMode);

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
    <header className=" bg-white dark:bg-slate-950 flex box-border justify-between w-full shadow-md p-3">
      <div className="text-sky-400 relative w-full  font-medium flex items-stretch">
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
                className="bg-transparent backdrop-blur-md p-4 rounded-md md:w-60 w-screen text-center absolute z-10 top-10"
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
                  style="text-red-400 dark:text-red-500 hover:text-red-500"
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
      <button className="" onClick={handleDarkMode}>
        <img
          src={darkMode ? moon : sun}
          className="text-sky-500 size-6"
          alt=""
        />
      </button>
      <button onClick={handleSideBar} className="md:hidden">
        {!svg ? (
          <svg
            className="swap-off"
            fill={darkMode ? "white" : "black"}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        ) : (
          <svg
            className="swap-on"
            fill={darkMode ? "white" : "black"}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        )}
      </button>
    </header>
  );
};

export default HeaderNavHome;
