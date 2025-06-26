// src/components/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router";
import { ThemeContext } from "../Components/ThemeContext";
import { useContext } from "react";
import './DashboardCss.css';
// import { ThemeContext } from "./ThemeContext";


const DashboardLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex font-main">
      <aside className="w-1/5 bg-[#d8ffd4] text-[#0d3b2e] h-screen px-4 py-6 sticky top-0 left-0">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
         <button
            className="btn btn-ghost bg-black rounded-full"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <nav className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 mt-4">
            <NavLink className='border-2 border-[#0d3b2e] rounded-full px-4 py-2 dashboardButton ' to="/dashboard" end>Overview</NavLink>
            <NavLink className='border-2 border-[#0d3b2e] rounded-full px-4 py-2 dashboardButton ' to="/dashboard/addtask">Add Task</NavLink>
            <NavLink className='border-2 border-[#0d3b2e] rounded-full px-4 py-2 dashboardButton ' to="/dashboard/mytasks">My Tasks</NavLink>
            <NavLink className='border-2 border-[#0d3b2e] rounded-full px-4 py-2 dashboardButton ' to="/dashboard/tasks">All Tasks</NavLink>
          </div>
          <NavLink className=' bg-[#0d3b2e] text-white rounded-full px-4 py-2 dashboardButton' to="/">Exit</NavLink>
        </nav>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export default DashboardLayout;
