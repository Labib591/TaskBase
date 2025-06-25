// src/components/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard">Overview</NavLink>
          <NavLink to="/dashboard/addtask">Add Task</NavLink>
          <NavLink to="/dashboard/mytasks">My Tasks</NavLink>
          {/* <NavLink to="/dashboard/all">All Tasks</NavLink> */}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};
export default DashboardLayout;
