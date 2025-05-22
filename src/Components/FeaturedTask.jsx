import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import TaskCard from "./TaskCard";

const FeaturedTask = () => {
  const data = useLoaderData();
  // console.log(data);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center mx-auto items-center my-5">
      <h1 className="text-center text-6xl font-bold text-[#14A800]">Featured Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {data.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>

      <button
        onClick={() => navigate("/tasks")}
        className="btn border-[#14A800] text-[#14A800] hover:bg-[#108600] hover:text-white"
      >
        See More Tasks
      </button>
    </div>
  );
};

export default FeaturedTask;
