import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectiionTitle/SectionTitle';
import MenuItem from '../MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularItem = () => {
    
    const [menu] = useMenu([])
    const popular = menu.filter(item => item.category === 'popular')
    // setItems(remaining)

    // useEffect(() => {
    //     fetch('Menubar.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const remaining = data.filter(item => item.category === 'popular')
    //             setItems(remaining)
    //         })
    // }, [])

    return (
        <section className='my-10'>
            <SectionTitle
                SubHeader={'Check it out'}
                Header={'From our menu'}
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline border-0 border-b-4 ">View full menu</button>
            </div>

        </section>
    );
};

export default PopularItem;