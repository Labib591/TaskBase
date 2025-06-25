import React from "react";
import Hero from "../Components/Hero";
import FeaturedTask from "../Components/FeaturedTask";
import Success from "../Components/Success";
import ComponentName from "../Components/Testimonial";
import Categories from "../Components/Categories";
import TestimonialSection from "../Components/Testimonial";

const Home = () => {
    return (
        <div className="font-main flex flex-col gap-10">
            <Hero></Hero>
            <Categories></Categories>
            <FeaturedTask></FeaturedTask>
            <Success></Success>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;