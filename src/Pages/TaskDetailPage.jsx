import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaClock,FaMoneyBill } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const TaskDetailPage = () => {

    const [bids, setBids] = useState(0);

    const handleBid = () => {
        setBids(prev => prev + 1);

    }

    const {_id, title, description, budget, deadline, category, email, username} = useLoaderData();

    return(<div>
        <div className="text-center text-lg font-semibold mt-4">
        You bid for {bids} {bids === 1 ? "opportunity" : "opportunities"}
      </div>
        <div className="w-11/12 bg-base-100 shadow-xl my-5 mx-auto text-[#021100]">
            <div className="flex justify-between p-5 border-[#14A800] border-2 rounded-2xl">
                <div className="flex flex-col gap-4">
                <h2 className="card-title text-3xl">{title}</h2>
                <p>{description}</p>
                <p className="bg-[#99DC8F] w-fit text-[#084300] px-4 py-2 font-medium rounded-4xl">{category}</p>
                <p className="text-xl font-bold flex items-center gap-2"><FaMoneyBill></FaMoneyBill>${budget}</p>
                <p className="flex items-center gap-2"><FaClock></FaClock>{deadline}</p>
                </div>
                 <div className="flex flex-col gap-4">
                    <p><span className="font-bold">Task By</span> : {username}</p>
                    <p><span className="font-bold">Email</span> : {email}</p>
                    <button onClick={handleBid} className="flex items-center gap-2 btn border-[#14A800] text-[#14A800] bg-transparent hover:bg-[#108600] hover:text-white">Bid<IoIosHeart></IoIosHeart></button>
                </div>
            </div>
        </div>
    </div>);
};

export default TaskDetailPage;