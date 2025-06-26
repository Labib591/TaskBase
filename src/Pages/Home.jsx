import React from "react";
import Hero from "../Components/Hero";
import FeaturedTask from "../Components/FeaturedTask";
import Success from "../Components/Success";
import ComponentName from "../Components/Testimonial";
import Categories from "../Components/Categories";
import TestimonialSection from "../Components/Testimonial";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
    return (
        <div className="font-main flex flex-col gap-20">
            <Hero></Hero>
            <Categories></Categories>
            <FeaturedTask></FeaturedTask>
            <HowItWorks></HowItWorks>
            <Success></Success>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;