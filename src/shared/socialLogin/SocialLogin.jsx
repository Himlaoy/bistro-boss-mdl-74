import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { GProvider } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || 5000

    const handleGoogle = () => {
        GProvider()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                const userInfo = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {

                        navigate(from, { replace: true })

                    })
            })
            .catch(error => console.log(error.message))
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