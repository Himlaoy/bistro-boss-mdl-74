import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const Login = () => {

    const { user, signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value
        console.log(email, password, captcha)

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            Swal.fire({
                title: 'Log in successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace:true})
        })
        .catch(error=>console.log(error.message))



    }

    const checkCaptcha = (e) => {
        const user_current_captcha = e.target.value

        if (validateCaptcha(user_current_captcha)) {
            setDisabled(false)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <Helmet>
                    <title>Bistro Boss | login</title>
                </Helmet>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />

                            </label>
                            <input  onBlur={checkCaptcha} type="text" name='captcha' placeholder="type the text above" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <button className='py-8'>Do not have an account please <Link className='text-orange-400' to={'/signUp'}>SignUp</Link>  </button>
                </div>
            </div>
        </div>
    );
};

export default Login;