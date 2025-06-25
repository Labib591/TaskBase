import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Williams',
    role: 'Startup Founder',
    quote: 'This platform helped me get my MVP built in record time. The freelancers are talented and reliable.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Small Business Owner',
    quote: 'I posted a task and had it completed within 24 hours. It saved me so much time and money!',
    rating: 4,
  },
  {
    name: 'Amina Rahman',
    role: 'Digital Marketer',
    quote: 'Freelancing through this marketplace has been a game changer for my career.',
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-[#DBF6D7] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#021100] mb-10">
        What Our Users Say
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <FaQuoteLeft className="text-3xl text-[#14A800] mb-4 mx-auto" />
                <p className="text-gray-700 text-lg italic mb-6">"{t.quote}"</p>
                <div className="flex justify-center mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <AiFillStar key={i} className="text-[#14A800]" />
                  ))}
                </div>
                <h4 className="text-[#021100] font-bold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
