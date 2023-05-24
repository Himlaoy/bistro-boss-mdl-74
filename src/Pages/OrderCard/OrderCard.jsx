import React from 'react';

const OrderCard = ({ item }) => {
    const { name, image, recipe, price } = item


    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute bg-slate-700 rounded text-white right-0 mr-4 px-2 mt-4'>{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;