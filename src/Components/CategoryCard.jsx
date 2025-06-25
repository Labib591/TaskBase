import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="group p-4 w-[250px] border-2 border-gray-400 rounded-lg bg-transparent flex flex-col items-center transition-all duration-300 hover:bg-black hover:text-white cursor-pointer">
      <span className="text-2xl transition-colors duration-300 group-hover:text-[#14A800]">
        {category.icon}
      </span>
      <h1 className="text-lg font-bold mt-2">{category.title}</h1>
      <p className="text-sm">{category.jobs} Tasks</p>
    </div>
  );
};

export default CategoryCard;
