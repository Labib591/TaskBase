import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';

const FeaturedTask = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="text-center flex flex-col justify-center mx-auto items-center">
            <h1 className='text-3xl font-bold text-[#14A800]'>Featured Tasks</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    data.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedTask;