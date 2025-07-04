import React from "react";
import CountUp from 'react-countup';

const Success = () => {
  return (
    <div id="success" className="text-center my-10 flex flex-col items-center text-[#212121]">
      <div className="">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-[#14A800]">
          Hire The Best Proffessionals
        </h1>
        <p className="font-medium opacity-80">
          Our platform connects you with verified, experienced people across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="md:flex md:flex-row md:gap-4 md:mt-10 flex flex-col gap-4 mt-10">
        <div className="bg-[#DBF6D7] px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
          
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={4} enableScrollSpy 
          scrollSpyDelay={200} end={900}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Total Tasks Completed</p>
        </div>
        <div className="bg-[#DBF6D7] px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
         
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={4} enableScrollSpy 
          scrollSpyDelay={200} end={467}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Total Reviews</p>
        </div>
        <div className="bg-[#DBF6D7] px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
          
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={4} enableScrollSpy 
          scrollSpyDelay={200} end={1000}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Freelancers</p>
        </div>
      </div>
    </div>
  );
};
export default Success;

