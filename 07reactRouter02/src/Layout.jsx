import React from "react";
import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";

export default function Layout(){

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

