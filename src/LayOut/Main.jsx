import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import NavBar from '../Pages/NavBar/NavBar';

const Main = () => {
    const location = useLocation()
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;