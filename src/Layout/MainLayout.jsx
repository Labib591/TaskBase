import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {

    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <span className="loading loading-spinner loading-xl mx-auto flex items-center justify-center"></span>;
    }

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;