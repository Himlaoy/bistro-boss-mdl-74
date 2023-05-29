import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart()

    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const allTotal = total.toFixed(2)

    const handleDelete = crt => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${crt._id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
                
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | mycart</title>
            </Helmet>
            <div className='font-semibold  flex justify-evenly'>
                <h1>My cart</h1>
                <h2 className='uppercase'>Total order {cart.length}</h2>
                <h2 className='uppercase'>Total price : {allTotal}</h2>
                <button className="btn btn-outline">Button</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cart.map((crt, index) =>
                                <tr key={crt._id}>
                                    <th >
                                        {index + 1}
                                    </th>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={crt.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {crt.name}
                                    </td>
                                    <td>{crt.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(crt)} className="btn btn-ghost btn-xs bg-orange-200"><FaTrashAlt className='text-white'></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;