import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext)

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000/'
    })

    useEffect(() => {

        // Add the authorization header to the existing axios instance
        axiosSecure.interceptors.request.use((config) => {

            const token = localStorage.getItem('jwt-token');
            if (token) {
                config.headers.Authorization = `Barer ${token}`
            }
            return config()

        })


        // Intercept responses
        axiosSecure.interceptors.response.use(
            (response) => response,
             async (error) => {
                // Handle 401 and 403 errors
                if (error.response && [401, 403].includes(error.response.status)) {
                    // Logout user and navigate to login
                   await  logOut()
                    navigate('/login')
                }

                return Promise.reject(error);
            }
        );
    }, [logOut, navigate, axiosSecure]);


    return [axiosSecure];
};

export default useAxiosSecure;
