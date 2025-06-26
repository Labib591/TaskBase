import React, { use, useContext } from "react";
// import Logo from "../assets/TaskBase.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "./ThemeContext";
const Header = () => {
  const { user, logOutUser } = use(AuthContext);

  const { theme, toggleTheme } = use(ThemeContext);
  // console.log(user);

  const handleLogOut = () => {
    logOutUser();
  };

  const notLoggedLinks = (
    <>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/"}>
          Home
        </NavLink>
      </li>
      
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/tasks"}>
          Browse Task
        </NavLink>
      </li>

      <li>
        <button className="hover:text-[#14A800]" onClick={() => {
          const success = document.getElementById('success');
          success?.scrollIntoView( 
            {behavior: 'smooth',}
        )}}>
          Abouts US
        </button>
      </li>
    </>
  );

  

  const loggedLinks = (
    <>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/tasks"}>
          Browse Task
        </NavLink>
      </li>

      <li>
        <button className="hover:text-[#14A800]" onClick={() => {
          const success = document.getElementById('success');
          success?.scrollIntoView( 
            {behavior: 'smooth',}
        )}}>
          Abouts US
        </button>
      </li>

      <li>
        <NavLink className="hover:text-[#14A800]" to={"/dashboard"}>
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 font-main">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {user ? loggedLinks : notLoggedLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <h1 className="text-3xl font-bold text-[#14A800]">TaskBase</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? loggedLinks : notLoggedLinks}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <button
            className="btn btn-ghost"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div
                data-tooltip-id="user"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
              </div>
              <Tooltip id="user" style={{ zIndex: "1000" }} />
              <button
                className="btn bg-[#14A800] text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <button className="btn bg-[#14A800] text-white hover:bg-transparent hover:text-[#14A800] hover:border-[#14A800]">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn border-[#14A800] text-[#14A800] hover:bg-[#14A800] hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
