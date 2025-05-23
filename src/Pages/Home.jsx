import React from "react";
import Hero from "../Components/Hero";
import FeaturedTask from "../Components/FeaturedTask";
import Success from "../Components/Success";
import ComponentName from "../Components/Testimonial";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedTask></FeaturedTask>
            <Success></Success>
            <ComponentName></ComponentName>
        </div>
    );
};

export default Home;