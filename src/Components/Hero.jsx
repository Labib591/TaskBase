import React from "react";
import { Link, useNavigate } from "react-router";
import HeroImage from "../assets/Office.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-[75vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        // Replace with your image URL or use a CSS class for the background
        backgroundImage: `url('${HeroImage}')`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Get Things Done, Faster.
        </h1>
        <p className="text-lg md:text-xl mb-6 font-light">
          Post your tasks and let skilled freelancers handle them — efficiently
          and affordably.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <Link to={"/dashboard/addtask"}>
          <button
            className="bg-[#14A800] hover:bg-[#108600] text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Add Your Task
          </button>
        </Link>
        <Link to={"/dashboard"}>
          <button
            className="bg-transparent hover:bg-[#108600] hover:text-white border-2 border-[#14A800] text-[#14A800] font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Go To Dashboard
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
