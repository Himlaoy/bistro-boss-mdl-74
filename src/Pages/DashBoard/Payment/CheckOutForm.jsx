import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CheckOutForm = ({price}) => {
    const [axiosSecure] = useAxiosSecure()

    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState()
    
    useEffect(()=>{
        axiosSecure.post("/create-payment-intent", {price})
        .then(res=>{
            console.log(res.data.clientSecret)
        })

    },[price,axiosSecure])

    const handleSubmit = async (event) => {

        // Block native form submission.
        event.preventDefault()
        // console.log('hello')
        
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        // console.log('card', card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setError(error.message)
            console.log(error.message)
        }
        else {
            setError('')
            console.log('payment method', paymentMethod)
        }


    }

    // console.log(stripe)
    return (
        <>

            <form className='w-2/3 mx-4' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
           { error && <p className='text-red-500'>{error}</p>}
        </>
    );
};

export default CheckOutForm;