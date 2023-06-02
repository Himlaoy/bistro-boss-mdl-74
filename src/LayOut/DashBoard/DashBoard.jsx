import React from 'react';
import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {

    const [cart] = useCart()

    // const isAdmin = true
    const [isAdmin] = useAdmin()
    console.log('is admin', isAdmin)

    return (
        <div className="drawer drawer-mobile">
            <Helmet>
                <title>Bistro Boss | DashBoard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] ">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/'}><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/addItem'}><FaUtensils></FaUtensils>Add an items</NavLink></li>
                                <li><NavLink to={'/dashboard/manageitems'}><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to={'/dashboard/history'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to={'/dashboard/allusers'}><FaUsers></FaUsers>All users</NavLink></li>
                                <div className="divider"></div>

                                <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to={'/menu'}> Order Menu</NavLink></li>
                                <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>

                            </>
                            :
                            <>
                                <li><NavLink to={'/'}><FaUsers></FaUsers>User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/history'}><FaUtensils></FaUtensils>Reservation</NavLink></li>
                                <li><NavLink to={'/dashboard/payment'}><FaWallet></FaWallet>Payment history</NavLink></li>
                                <li><NavLink to={'/dashboard/myCart'}><FaShoppingCart></FaShoppingCart>My cart
                                    <div className="badge badge-secondary">+{cart?.length}</div></NavLink></li>
                                <div className="divider"></div>
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