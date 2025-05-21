import React, { use } from "react";
import Logo from "../assets/TaskBase.png";
import { Link, NavLink } from "react-router";
import Home from "./Home";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { user, logOutUser} = use(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOutUser();
  };

  const Links = (
    <>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/addtask"}>
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/tasks"}>
          Browse Task
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/mytasks"}>
          My Tasks
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
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
              {Links}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
            {user ? (
              <div className="flex gap-3">
                <div className="w-10 rounded-2xl">
                  <img src={user?.photoURL} alt="User" />
                </div>
                <button
                  className="btn bg-[#14A800] text-white"
                  onClick={() => handleLogOut()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn border-[#14A800] text-[#14A800]">Login</button>
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default Header;
