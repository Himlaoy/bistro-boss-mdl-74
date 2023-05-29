import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const {GProvider} = useContext(AuthContext)

    const handleGoogle = ()=>{
        GProvider()
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser)
        })
        .catch(error=>console.log(error.message))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center py-6'>
                <button onClick={handleGoogle} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;