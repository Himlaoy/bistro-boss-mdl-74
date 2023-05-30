import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user} = useContext(AuthContext)

    const token = localStorage.getItem('jwt-token')
    // const [axiosSecure] = useAxiosSecure()


    const { refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers:{
                    authorization: `barer ${token}`
                }
            })
            return res.json()
        }
        // queryFn: async()=>{
        //     const res = await axiosSecure(`/carts?email=${user?.email}`)
        //     return res.data
        // }
    })

    return [cart, refetch]


    
};

export default useCart;

// axiosSecure.interceptors.request.use((config) => {

//     const token = localStorage.getItem('jwt-token');
//     if(token){
//         config.headers.Authorization= `Barer ${token}`
//     }
//     return config()

// })