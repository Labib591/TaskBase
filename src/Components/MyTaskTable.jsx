import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const MyTaskTable = ({ task }) => {
  console.log(task);

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {task.map((task) => (
              <tr key={task._id} className="hover:bg-[#DBF6D7]">
                <th>{}</th>
                <td className="font-bold">{task.title}</td>
                <td>
                  {task.description.length > 100
                    ? task.description.slice(0, 100) + "..."
                    : task.description}
                </td>
                <td>{task.category}</td>
                <td>{task.deadline}</td>
                <td className="font-bold">${task.budget}</td>
                <td>
                  <button className="btn bg-[#14A800] text-white flex items-center">
                    Update<IoIosArrowDropright size={16}></IoIosArrowDropright>
                  </button>
                  <button className="btn bg-red-500 text-white flex items-center">
                    Delete<FaTrash size={16}></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
            {/* <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr> */}
            {/* row 3 */}
            {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTaskTable;
