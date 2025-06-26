import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";

const BrowseTask = () => {
  const tasks = useLoaderData();

  const [allTasks, setAllTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [sortOption, setSortOption] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.toLowerCase();
    const results = allTasks.filter(
      (task) =>
        task.category.toLowerCase().includes(query)
    );
    setFilteredTasks(results);
    e.target.reset();
  };

  return (
    <>
      <div className="w-11/12 flex flex-col gap-5 mx-auto py-2">
        <h1 className="text-center lg:text-5xl md:text-3xl text-xl font-bold text-[#14A800]">All Tasks</h1>

        <div className="flex justify-center">
          <form onSubmit={handleSearch} className="flex w-full md:w-1/2 gap-2">
          <input
            type="search"
            name="search"
            placeholder="Search by model, brand..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition duration-200"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-[#14A800] text-white rounded-full hover:bg-opacity-90 transition duration-200"
          >
            Search
          </button>
        </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTasks.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseTask;
