import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import NavCounter from './NavProductCount/NavCounter';
import useAdmin from '../../Hooks/useAdmin';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin()

    // let cart = null;

    // if (user) {
    //   const [userCart] = useCart();
    //   cart = userCart;
    // }      
    
    // {
    //     user && ( const [cart] = useCart)
    // } 
    //  const cart = []
     const [cart] = useCart()


    const handleOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const option = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/order/salad'}>Order</Link></li>
        {
            isAdmin ? <li><Link to={'dashboard/adminHome'}>Dashboard</Link></li>:
            <li><Link to={'dashboard/userHome'}>Dashboard</Link></li>
        }
        <NavCounter cart={cart}></NavCounter>
        {user ? <li><Link onClick={handleOut}>LogOut</Link></li>
            : <li><Link to={'/login'} >Log in</Link></li>}
    </>



    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-lg bg-black  text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {option}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {option}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;