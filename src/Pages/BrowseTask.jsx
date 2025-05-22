import React from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";

const BrowseTask = () => {
  const tasks = useLoaderData();

  return (
    <>
      <div className="w-11/12 flex flex-col gap-5 mx-auto my-5">
        <h1 className="text-center text-6xl font-bold text-[#14A800]">All Tasks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseTask;
