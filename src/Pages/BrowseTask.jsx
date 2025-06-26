import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";

const BrowseTask = () => {
  const tasks = useLoaderData();

  const [allTasks, setAllTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [sortOption, setSortOption] = useState("");

  const handleSorting = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...filteredTasks];

    switch (option) {
      case "date-newest":
        sorted.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
        break;

      case "date-oldest":
        sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        break;

      case "price-lowest":
        sorted.sort((a, b) => a.budget - b.budget);
        break;

      case "price-highest":
        sorted.sort((a, b) => b.budget - a.budget);
        break;

      default:
        sorted = [...allTasks];
    }

    setFilteredTasks(sorted);
  };

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
      <div className="w-11/12 flex flex-col gap-5 mx-auto py-4">
        <h1 className="text-center lg:text-5xl md:text-3xl text-xl font-bold text-[#14A800]">All Tasks</h1>

        <div className="my-4 w-full flex flex-col md:flex-row items-center justify-between text-gray-500 bg-white p-4 rounded-2xl shadow-md">
          <form onSubmit={handleSearch} className="flex w-full md:w-1/2 gap-2">
          <input
            type="search"
            name="search"
            placeholder="Search by category"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition duration-200"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-[#14A800] text-white rounded-full hover:bg-opacity-90 transition duration-200"
          >
            Search
          </button>
        </form>
        <div className="mt-4 md:mt-0">
          <select
            onChange={handleSorting}
            value={sortOption}
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          >
            <option value="">Sort By</option>
            <option value="date-newest">Deadline: Newest First</option>
            <option value="date-oldest">Deadline: Oldest First</option>
            <option value="price-lowest">Budget: Lowest First</option>
            <option value="price-highest">Budget: Highest First</option>
          </select>
        </div>
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
