import React from "react";
import { FiSend, FiBriefcase, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: <FiSend size={32} className="text-[#14a800]" />,
    title: "1. Post Your Task",
    description: "Describe what you need done. Add budget, deadline, and any specific requirements. The more details, the better!",
    img: "https://undraw.co/api/illustrations/fbb408bd-6f61-464b-8135-2092799a013f", // Replace with your preferred vector
  },
  {
    icon: <FiBriefcase size={32} className="text-[#14a800]" />,
    title: "2. Receive Bids",
    description: "Freelancers will bid on your task with their price and proposal. Compare offers and profiles before making a decision.",
    img: "https://undraw.co/api/illustrations/6c97d2e8-2264-4e4f-a9e3-fadb2f2e8b18", // Replace with your preferred vector
  },
  {
    icon: <FiCheckCircle size={32} className="text-[#14a800]" />,
    title: "3. Hire & Get It Done",
    description: "Hire the right person and track progress. Pay securely once the task is complete and you’re happy with the result.",
    img: "https://undraw.co/api/illustrations/7cdcc994-0e4e-429f-b9b1-7f846ea2bc67", // Replace with your preferred vector
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-[#f8fff8] px-6 md:px-20">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#14a800] mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#0d3b2e]">{step.title}</h3>
            <p className="text-gray-600 mb-4">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
