import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { user } = use(AuthContext);

  const navigate = useNavigate();

  const {_id, title, description, category, budget, deadline } = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    taskData.budget = parseInt(taskData.budget, 10);

    fetch(`https://task-base-server.vercel.app/tasks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task has been added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });

      setTimeout(() => navigate("/dashboard/mytasks"), 1000);
  };

  const categories = ["Web Development", "Design", "Writing", "Marketing"];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-2xl bg-[#DBF6D7] text-[#021100] rounded-2xl shadow-md p-6 sm:p-8 md:p-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Update Task
        </h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Task Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              defaultValue={category}
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              required
              rows={4}
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Deadline</label>
              <input
                type="date"
                name="deadline"
                defaultValue={deadline}
                required
                className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <label className="block font-semibold mb-1">Budget ($)</label>
              <input
                type="number"
                name="budget"
                defaultValue={budget}
                required
                className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full border rounded-xl px-4 py-2 bg-gray-100 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">User Name</label>
            <input
              type="text"
              name="username"
              value={user?.displayName}
              readOnly
              className="w-full border rounded-xl px-4 py-2 bg-gray-100 text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#14A800] text-white font-semibold py-2 rounded-xl hover:bg-[#108600] transition text-sm sm:text-base"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
