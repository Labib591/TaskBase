import React, { use, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import { ThemeContext } from "./ThemeContext";

const DashboardOverview = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { user, logOutUser } = useContext(AuthContext);
  const data = useLoaderData();

  const initialmyTasks = data.filter((task) => task.email === user.email);
  const myTasks = initialmyTasks.length;

  const length = data.length;
  const uniqueEmails = new Set(data.map((item) => item.email));
  const users = uniqueEmails.size;

  console.log(users);

  return (
    <div>
      <header className="flex items-center justify-between mt-0 bg-[#192218] py-2 px-4">
        <div>
          <h2 className="text-lg md:text-2xl font-bold text-white">
            <span className="text-[#14A800] font-medium">Welcome</span>{" "}
            {user.displayName}
          </h2>
        </div>
        <div className="flex items-center">
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <button
            onClick={logOutUser}
            className="text-[#14A800] font-medium ml-2 border-2 border-[#14A800] px-4 py-2 rounded-lg cursor-pointer"
          >
            Logout
          </button>
        </div>
      </header>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-4">
          <div className="flex flex-col text-center gap-2 bg-[#DBF6D7] px-12 py-10 rounded-2xl">
            <p className="text-5xl font-bold text-[#212121]">{length}</p>
            <h1 className="text-2xl text-[#212121]">Total Number of Tasks</h1>
          </div>
          <div className="flex flex-col text-center gap-2 bg-[#DBF6D7] px-12 py-10 rounded-2xl">
            <p className="text-5xl font-bold text-[#212121]">{users}</p>
            <h1 className="text-2xl text-[#212121]">Total Number of Users</h1>
          </div>
          <div className="flex flex-col text-center gap-2 bg-[#DBF6D7] px-12 py-10 rounded-2xl">
            <p className="text-5xl font-bold text-[#212121]">{myTasks}</p>
            <h1 className="text-2xl text-[#212121]">Your Tasks</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
