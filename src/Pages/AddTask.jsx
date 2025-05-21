import React from "react";
import { FaArrowDown } from "react-icons/fa";

const AddTask = () => {


    const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    console.log(taskData);

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    }

      const categories = [
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
  ];


  return (
     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Add New Task
        </h1>
        <form onSubmit={handleAddTask} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Task Title</label>
            <input
              type="text"
              name="title"
              required
              
              
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              required
              
              
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
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
                required
               
                className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <label className="block font-semibold mb-1">Budget ($)</label>
              <input
                type="number"
                name="budget"
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
              value="mahi"
              readOnly
              className="w-full border rounded-xl px-4 py-2 bg-gray-100 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">User Name</label>
            <input
              type="text"
              name="username"
             value="labib"
              readOnly
              className="w-full border rounded-xl px-4 py-2 bg-gray-100 text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#14A800] text-white font-semibold py-2 rounded-xl hover:bg-[#108600] transition text-sm sm:text-base"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>

  );
};

export default AddTask;
