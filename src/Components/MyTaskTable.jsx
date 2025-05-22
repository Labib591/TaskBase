import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import Swal from "sweetalert2";

const MyTaskTable = ({ task }) => {
  console.log(task);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-base-server.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

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
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn bg-red-500 text-white flex items-center"
                  >
                    Delete<FaTrash size={16}></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTaskTable;
