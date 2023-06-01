import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { get } from 'react-hook-form';

const useAdmin = () => {
        const token = localStorage.getItem('jwt-token')


    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:isAdmin, isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }

    })
    
    return [isAdmin, isAdminLoading]
    
};

export default useAdmin;