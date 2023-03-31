import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Header from "../components/Header";
import HeaderBand from "../components/HeaderBand";
import Footer from "../components/Footer";
import './pages.css';
import '../App.css';

const Layout = () => {
  return (
    <>  
        <div className="header-container">
            <Header />
            <HeaderBand />
        </div>
        <div className="page-container">
          <Outlet className="page-component"/>
          <Navbar />
        </div>
    </>
  );
};

export default Layout;