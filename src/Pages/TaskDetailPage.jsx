import React from "react";
import { useLoaderData } from "react-router";

const TaskDetailPage = () => {

    const task = useLoaderData();

    return <div>TaskDetailPage</div>;
};

export default TaskDetailPage;