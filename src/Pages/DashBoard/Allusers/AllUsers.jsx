import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {

    const {data:users = [], refetch} = useQuery(['users'], async()=>{
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    })

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h1>ok here is {users.length} users</h1>
        </div>
    );
};

export default AllUsers;