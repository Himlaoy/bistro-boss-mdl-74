import React from 'react';
import SectionTitle from '../../../components/SectiionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';

const Payment = () => {
    const [cart] = useCart()

    const total = cart.reduce((sum, item)=>  sum + item.price ,  0)
    const price = parseFloat(total.toFixed(2))

    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GEWAY_PK);

    return (
        <div>
            <SectionTitle SubHeader={'please process'} Header={'payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;