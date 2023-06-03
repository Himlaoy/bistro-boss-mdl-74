import React from 'react';

import useAuth from '../../../Hooks/useAuth';

const AdminHome = () => {

    const {user} = useAuth()

    return (
        <div className='w-full'>
            <h1>This is admin home</h1>
            <p>Here is admin is : {user?.displayName}</p>
        </div>
    );
};

export default AdminHome;