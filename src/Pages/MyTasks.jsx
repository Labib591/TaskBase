import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import MyTaskTable from "../Components/MyTaskTable";

const MyTasks = () => {

    const {user} = use(AuthContext);
    const allTasks = useLoaderData();
    const myTasks = allTasks.filter(task => task.email === user.email);

    return (<div className="w-11/12 flex flex-col gap-5 mx-auto my-5">
        <h1 className="text-center text-6xl font-bold text-[#14A800]">My Tasks</h1>

        <div className="">
            {<MyTaskTable key={myTasks._id} task={myTasks}></MyTaskTable>}
        </div>
    </div>);
};

export default MyTasks;