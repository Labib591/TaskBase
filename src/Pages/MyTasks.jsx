import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";

const MyTasks = () => {

    const {user} = use(AuthContext);
    const allTasks = useLoaderData();
    const myTasks = allTasks.filter(task => task.email === user.email);

    return (<div className="w-11/12 flex flex-col gap-5 mx-auto my-5">
        <h1 className="text-center text-6xl font-bold text-[#14A800]">My Tasks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {myTasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)}
        </div>
    </div>);
};

export default MyTasks;