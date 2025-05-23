import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HeroImage from "../assets/Office.jpg";
import HeroImage2 from "../assets/Dev.jpg";
import HeroImage3 from "../assets/Satisfaction.jpg";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Hero = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();


    const handleAddTask = () => {
        if (user) {
          navigate("/addtask");
        } else {
          navigate("/login");
        }
      };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center gap-4 px-10 py-5 bg-[#DBF6D7]">
            <div className="flex flex-col gap-10">
                <h1 className="text-2xl md:text-6xl font-bold text-[#021100]">
              Get Your Tasks Done By Top Professionals
            </h1>
            <button onClick={handleAddTask} className="btn bg-[#14A800] text-[#DBF6D7] hover:bg-[#108600]">Add Task</button>
            </div>
            <div className="p-3">
              <img className="rounded-2xl w-[50rem]" src={HeroImage} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-10 py-5 bg-[#DBF6D7]">
            <div className="flex flex-col gap-10">
                <h1 className="text-2xl md:text-6xl font-bold text-[#021100]">
              They Are Passionate At What They Do
            </h1>
            <button onClick={handleAddTask} className="btn bg-[#14A800] text-[#DBF6D7] hover:bg-[#108600]">Add Task</button>
            </div>

            <div className="p-3">
              <img className="rounded-2xl w-[50rem]" src={HeroImage2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-10 py-5 bg-[#DBF6D7]">
            <div className="flex flex-col gap-10">
                <h1 className="text-2xl md:text-6xl font-bold text-[#021100]">
              Top Corporations Hire Like This
            </h1>
            <button onClick={handleAddTask} className="btn bg-[#14A800] text-[#DBF6D7] hover:bg-[#108600]">Add Task</button>
            </div>
            <div>
              <img className="rounded-2xl w-[50rem]" src={HeroImage3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
