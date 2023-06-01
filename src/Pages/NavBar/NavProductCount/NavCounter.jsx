import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavCounter = ({cart}) => {
    return (
        <li><Link to={'/dashboard/myCart'}>
            <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length}</div>
            </button>
        </Link>
        </li>
    );
};

export default NavCounter;