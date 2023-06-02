import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import useAuth from '../../../Hooks/useAuth';

const CheckOutForm = ({ price }) => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState()
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if(price < 1) return
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })

    }, [price, axiosSecure])

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

        setProcessing(true)

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName
                    },
                },
            },
        );

        if(confirmError){
            console.log(error)
        }

        console.log('payment intend',paymentIntent)
        setProcessing(false)

        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            const transactionId = paymentIntent.id;
            // TODO next;

            const payment = {
                
            }
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
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
            {transactionId && <p className='text-green-500'>Transaction completed with transaction id : {transactionId}</p> }
        </>
    );
};

export default CheckOutForm;