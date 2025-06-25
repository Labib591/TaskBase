import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import TaskCard from "./TaskCard";

const FeaturedTask = () => {
  const data = useLoaderData();
  // console.log(data);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 justify-center mx-auto items-center my-5 w-[90%]">
      <h1 className="text-center lg:text-5xl md:text-3xl text-xl font-bold text-[#14A800]">Featured Tasks</h1>
      <p className="text-center">Tasks you can work on right now</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {data.length === 0 ? (
          <h1 className="text-2xl font-bold text-[#14A800]">No Task Found</h1>
        ) : (
          data.map((task) => <TaskCard key={task._id} task={task}></TaskCard>)
        )}
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
