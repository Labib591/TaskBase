import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import MyTaskTable from "../Components/MyTaskTable";

const MyTasks = () => {

    const {user} = use(AuthContext);
    const allTasks = useLoaderData();
    const initialmyTasks = allTasks.filter(task => task.email === user.email);

    const [tasks, setTasks] = useState(initialmyTasks);

    return (<div className="w-11/12 flex flex-col gap-5 mx-auto my-5">
        <h1 className="text-center text-6xl font-bold text-[#14A800]">My Tasks</h1>

        <div className="">
            {<MyTaskTable
            tasks={tasks}
            setTasks={setTasks}
            key={initialmyTasks._id}
            task={initialmyTasks}></MyTaskTable>}
        </div>
    </div>);
};

export default MyTasks;