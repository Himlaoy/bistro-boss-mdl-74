import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../shared/socialLogin/SocialLogin';

const SignUp = () => {

    const {createUser, updateUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUser(data.name, data.photo)
                .then(()=>{
                    const userInfo = {name: data.name, email: data.email, image:data.photo}
                    fetch('http://localhost:5000/users',{
                        method:"POST",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(userInfo)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.insertedId){
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sign Up successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                              navigate('/')

                        }
                    })
                    
                })
                
                .catch(error=>console.log(error.message))
                console.log('user updated')
            })
            .catch(error => console.log(error.message))
    };


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
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                            {errors.email && <span className='text-orange-400'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">URL</span>
                            </label>
                            <input type="URL" {...register("photo", { required: true })} name='photo' placeholder="photo" className="input input-bordered" />
                            {errors.photo && <span className='text-orange-400'>PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { 
                                required: true,
                                 minLength:6, 
                                 maxLength:10,
                                 pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                  })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type==='required' && <span className='text-orange-400'>Password is required</span>}
                            {errors.password?.type==='minLength' && <span className='text-orange-400'>Password length will be more than 6 character</span>}
                            {errors.password?.type==='maxLength' && <span className='text-orange-400'>Password length will be less than 10 character</span>}
                            {errors.password?.type==='pattern' && <span className='text-orange-400'>Password must have one uppercase , one lowercase and one special character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button className='py-8'>Already have an account? please <Link className='text-orange-400' to={'/login'}>Login</Link></button>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default SignUp;