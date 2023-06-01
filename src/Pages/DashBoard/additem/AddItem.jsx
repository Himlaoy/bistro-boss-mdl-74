import React from 'react';
import SectionTitle from '../../../components/SectiionTitle/SectionTitle';

const AddItem = () => {
    return (
        <div className='w-full'>
            <SectionTitle SubHeader={"What's New "} Header={'Add an Item'}></SectionTitle>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your bio</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
            </form>
        </div>
    );
};

export default AddItem;