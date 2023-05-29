import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {

    const [cart] = useCart()


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | mycart</title>
            </Helmet>
            <h1>My cart</h1>
            <h2>Total order {cart.length}</h2>
            <h2></h2>

        </div>
    );
};

export default MyCart;