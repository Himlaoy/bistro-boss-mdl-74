import React from 'react';
import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {

    const [cart] = useCart()

    const isActive = true

    return (
        <div className="drawer drawer-mobile">
            <Helmet>
                <title>Bistro Boss | DashBoard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] ">

                    {
                        isActive ?
                            <>
                                <li><NavLink to={'/'}><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaUtensils></FaUtensils>Add items</NavLink></li>
                                <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to={'/dashboard/history'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to={'/dashboard/allusers'}><FaUsers></FaUsers>All users</NavLink></li>
                                
                            </>
                            :
                            <>
                                <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to={'/menu'}> Order Menu</NavLink></li>
                                <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>

                            </>
                    }




                </ul>

            </div>
        </div>
    );
};

export default DashBoard;