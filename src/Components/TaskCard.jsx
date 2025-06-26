import React from "react";
import { FaClock } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f2fff0] border border-[#14A800] rounded-2xl p-6 w-full flex flex-col justify-between max-w-md shadow-md transition hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-[#021100] mb-2">{task.title}</h2>

      <p className="text-[#084300] text-sm mb-3">
        {task.description.length > 50
          ? `${task.description.slice(0, 50)}...`
          : task.description}
      </p>

      <div className="inline-block w-fit bg-[#99DC8F] text-[#084300] text-xs font-medium px-3 py-1 rounded-full mb-3">
        {task.category}
      </div>

      <div className="flex items-center justify-between text-[#084300] mb-4">
        <span className="text-lg font-bold">${task.budget}</span>
        <span className="flex items-center gap-2 text-sm">
          <FaClock className="text-[#084300]" />
          {task.deadline}
        </span>
      </div>

      <button
        onClick={() => navigate(`/tasks/task/${task._id}`)}
        className="w-full bg-[#14A800] text-white flex items-center justify-center gap-2 py-2 px-4 rounded-full text-sm font-medium transition hover:bg-[#119900]"
      >
        See Details <IoIosArrowDropright size={16} />
      </button>
    </div>
  );
};

export default TaskCard;
