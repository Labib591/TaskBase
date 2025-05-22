import React from "react";
import { FaClock } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  
  const navigate = useNavigate();
  // console.log("task", task);
  return (
    <div className="card border-2 border-[#14A800] bg-[#DBF6D7] w-96 shadow-sm">
      <div className="card-body flex flex-col items-baseline">
        <h2 className="card-title text-2xl text-[#021100]">{task.title}</h2>
        <p>
          {task.description.length > 100
            ? task.description.slice(0, 100) + "..."
            : task.description}
        </p>
        <p className="bg-[#99DC8F] text-[#084300] px-4 py-2 font-medium rounded-4xl">{task.category}</p>
        <p className="text-xl font-bold">${task.budget}</p>
        <p className="flex items-center gap-2"><FaClock></FaClock>{task.deadline}</p>
        <div className="card-actions mt-2">
          <button onClick={() => navigate(`/tasks/task/${task._id}`)} className="btn bg-[#14A800] text-white flex items-center">See Details<IoIosArrowDropright size={16}></IoIosArrowDropright></button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
