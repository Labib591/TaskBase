import React from "react";
import CategoryCard from "./CategoryCard";
import { FaFigma, FaReact } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";

const Categories = () => {
    const categoriesObject = [{
        title: "Web Development",
        icon: <FaReact></FaReact>,
        jobs: 3
    },
    {
        title: "Design",
        icon: <FaFigma></FaFigma>,
        jobs: 1
    },
    {
        title: "Writing",
        icon: <FaPenNib />,
        jobs: 10
    },
    {
        title: "Marketing",
        icon: <FaArrowTrendUp />,
        jobs: 12
    }
    ];

    return (
        <div className="flex flex-col gap-4 justify-center mx-auto items-center">
            <h1 className="text-center lg:text-5xl md:text-3xl text-xl font-bold text-[#14A800]">Categories</h1>
            <p className="text-center">Our top categories</p>
            
            <div className="flex flex-wrap justify-center gap-4 my-5">
                {
                categoriesObject.map((category, index) => <CategoryCard key={index} category={category}></CategoryCard>)
            }
            </div>

        </div>
     );
    };

export default Categories;