import React from 'react';
import SectionTitle from '../../../components/SectiionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_bb_hosting_token = import.meta.env.VITE_IMAGE_BB_UPLOAD


const AddItem = () => {

    const [axiosSecure ] = useAxiosSecure()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_bb_hosting_token}`

    const onSubmit = data => {

       const formDATA = new FormData()
       formDATA.append('image', data.image[0])

       fetch(image_hosting_url,{
        method:'POST',
        body:formDATA
       })
       .then(res=>res.json())
       .then(imageResponse=>{
        console.log(imageResponse)
        if(imageResponse.success){
            const imgURL = imageResponse.data.display_url
            console.log(imgURL)
            const {name, price, category, details}= data
            const newItem = {name , price: parseFloat(price), category, details, image:imgURL}
            console.log(newItem)

            axiosSecure.post('/menu', newItem)
            .then(data=>{
                console.log('after newItem data',data.data)
                if(data.data.insertedId){
                    Swal.fire({
                        title: 'Sweet!',
                        text: 'Modal with a custom image.',
                        imageUrl: 'https://unsplash.it/400/200',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                      })
                }
            })

        }
       })


    };
    console.log(errors)

    console.log(image_bb_hosting_token)

    return (
        <div className='w-full px-10'>
            <SectionTitle SubHeader={"What's New "} Header={'Add an Item'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Type here"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />
                </div>
                <div className='flex mt-3 items-center'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select className="select select-bordered"{...register("category", { required: true })}>
                            <option disabled value={'pick one'}>Pick one</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'soup'}>Soup</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'dessert'}>Dessert</option>
                            <option value={'drinks'}>Drinks</option>
                        </select>

                    </div>
                    <div className="form-control w-full ml-3 my-3">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                        {...register("details", { required: true })} placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full mt-3">
                    <label className="label">
                        <span className="label-text">Item image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />

                </div>

                <input type="submit" className="btn btn-sm mt-3" value="Add item" />
            </form>
        </div>
    );
};

export default AddItem;