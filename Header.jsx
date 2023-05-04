import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimesCircle, FaBars, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="my-container">
      <div className="flex items-center justify-between relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* logo section  */}
        <Link to="/" className="">
          <span className="ml-2 text-2xl font-bold tracking-wide">
            only<span className="text-lime-400">Chefs</span>
          </span>
        </Link>
        <div className="flex">
          {darkMode ? (
            <button
              onClick={toggleDarkMode}
              className="items-center hidden lg:flex"
            >
              <FaToggleOn className="text-2xl" />
            </button>
          ) : (
            <button
              onClick={toggleDarkMode}
              className="items-center hidden lg:flex"
            >
              <FaToggleOff className="text-2xl" />
            </button>
          )}
          {/* nav section  */}
          <ul className="items-center hidden space-x-8 mx-4 lg:flex font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorite-chef"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About
              </NavLink>
            </li>
          </ul>
          {/* button section  */}

          {user ? (
            <div className="hidden lg:flex items-center gap-4 ">
              <img
                className="h-14 w-14 rounded-full"
                src={`${user?.photoURL}`}
                alt=""
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              />
              <Tooltip id="my-tooltip" />
              <button onClick={logOut} className="btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden lg:flex">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
        {/* mobile navbar section  */}
        <div className="lg:hidden">
          {/* dropdown open button  */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className=" text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div
                className={`p-5  border rounded shadow-sm ${
                  darkMode ? "dark" : "bg-white"
                }`}
              >
                {/* logo & button section  */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {user ? (
                      <img
                        className="h-14 w-14 rounded-full"
                        src={`${user?.photoURL}`}
                        alt=""
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={user.displayName}
                      />
                    ) : (
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-2xl font-bold tracking-wide">
                          only<span className="text-lime-400">Chefs</span>
                        </span>
                      </Link>
                    )}
                  </div>
                  {/* dropdown menu close button  */}
                  <div className="flex gap-x-2 items-center">
                    {darkMode ? (
                      <button onClick={toggleDarkMode} className="">
                        <FaToggleOn className="text-2xl" />
                      </button>
                    ) : (
                      <button onClick={toggleDarkMode} className="">
                        <FaToggleOff className="text-2xl" />
                      </button>
                    )}
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaTimesCircle className=" text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* mobile nav items section  */}
                <nav className="ml-2">
                  <ul className="space-y-4 font-medium">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="favorite-chef"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Favorites
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="blog"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      {user ? (
                        <span onClick={logOut}>Logout</span>
                      ) : (
                        <Link to="/login">Login</Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="bg-gray-50" />
    </div>
  );
};

export default Header;
