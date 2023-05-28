import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderCard = ({ item }) => {
    const { name, image, recipe, price,_id } = item
    const navigate = useNavigate()
    const location = useLocation()
    

    const {user} = useContext(AuthContext)

    const handleAddToCard=item=>{
        console.log(item)

        
        if(user && user.email){
            const cartInfo = {menuItemId: _id, image, recipe, price, name,email:user.email}
            fetch('http://localhost:5000/cart',{
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(cartInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state:{from:location}})
                }
              })
        }

    }


    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute bg-slate-700 rounded text-white right-0 mr-4 px-2 mt-4'>$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;