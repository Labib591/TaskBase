import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaClock, FaMoneyBill } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const TaskDetailPage = () => {
  const {
    _id,
    title,
    description,
    budget,
    deadline,
    category,
    email,
    username,
    bids: initialBids,
  } = useLoaderData();

  const [bid, setBid] = useState(initialBids);
  const [isLoading, setIsLoading] = useState(false);

  const handleBid = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://task-base-server.vercel.app/tasks/${_id}/bid`,
        {
          method: "PATCH",
        }
      );

      if (res.ok) {
        setBid((prev) => prev + 1);
      } else {
        console.error("Failed to bid.");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#021100] py-10 px-4">
      <div className="text-center text-lg font-medium mb-6">
        You bid for{" "}
        <span className="font-bold text-[#14A800]">{bid}</span>{" "}
        {bid === 1 ? "opportunity" : "opportunities"}
      </div>

      <div className="max-w-4xl mx-auto bg-[#DBF6D7] border-2 border-[#14A800] rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{title}</h2>

          <p className="text-sm leading-relaxed">{description}</p>

          <span className="inline-block bg-[#99DC8F] text-[#084300] text-xs font-semibold px-3 py-1 rounded-full w-fit">
            {category}
          </span>

          <p className="text-lg font-bold flex items-center gap-2">
            <FaMoneyBill />
            ${budget}
          </p>

          <p className="text-sm flex items-center gap-2">
            <FaClock />
            {deadline}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-bold">Task By:</span> {username}
            </p>
            <p className="text-sm">
              <span className="font-bold">Email:</span> {email}
            </p>
          </div>

          <button
            onClick={handleBid}
            disabled={isLoading}
            className={`mt-4 w-full flex items-center justify-center gap-2 rounded-xl py-2 px-4 text-sm font-semibold transition ${
              isLoading
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#14A800] hover:bg-[#108600] text-white"
            }`}
          >
            {isLoading ? "Bidding..." : "Bid"} <IoIosHeart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailPage;
