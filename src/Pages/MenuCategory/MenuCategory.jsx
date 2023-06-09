import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items,title, img }) => {
    return (
        <div className='py-10'>
            <Cover title={title} img={img}></Cover>
            <div className='grid md:grid-cols-2 gap-0'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">{title}</button></Link>
        </div>
    );
};

export default MenuCategory;