// src/components/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex font-main">
      <aside className="w-1/5 bg-[#072703] text-white h-screen px-4 py-6 sticky top-0 left-0">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <NavLink to="/dashboard">Overview</NavLink>
            <NavLink to="/dashboard/addtask">Add Task</NavLink>
            <NavLink to="/dashboard/mytasks">My Tasks</NavLink>
            <NavLink to="/dashboard/tasks">All Tasks</NavLink>
          </div>
          <NavLink to="/">Exit</NavLink>
        </nav>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export default DashboardLayout;
