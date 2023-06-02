import React from 'react';
import SectionTitle from '../../../components/SectiionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItems = () => {

    const [axiosSecure] = useAxiosSecure()

    const [menu, refetch] = useMenu()
    // console.log(menu.length)


    const handleDelete = (item) => {
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })

                // fetch(`http://localhost:5000/carts/${crt._id}`,{
                //     method:'DELETE'
                // })
                // .then(res=>res.json())
                // .then(data=>{
                //     if(data.deletedCount>0){
                //         refetch()
                //         Swal.fire(
                //             'Deleted!',
                //             'Your file has been deleted.',
                //             'success'
                //         )
                //     }
                // })

            }
        })
    }

    return (
        <div className='w-full'>
            <div className='w-full'>
                <SectionTitle SubHeader={'Hurry Up'} Header={'Manage all items'}>

                </SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        {item.name}

                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-orange-200 w-14 h-10"><FaTrashAlt className=''></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;