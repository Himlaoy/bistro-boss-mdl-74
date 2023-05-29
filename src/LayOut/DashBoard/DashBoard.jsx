import React from 'react';
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] ">
                    <li><NavLink to={'/'}><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment history</NavLink></li>
                    <li><NavLink to={'/dashboard/myCart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to={'/menu'}> Order Menu</NavLink></li>
                    <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;