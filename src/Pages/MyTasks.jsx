import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyTasks = () => {

    const {user} = use(AuthContext);

    return (<div>MyTasks</div>);
};

export default MyTasks;