import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectiionTitle/SectionTitle';
import MenuItem from '../MenuItem/MenuItem';

const PopularItem = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('Menubar.json')
        .then(res=>res.json())
        .then(data=>{
            const remaining = data.filter(item=>item.category==='popular')
            setItems(remaining)
        })
    },[])

    return (
        <section>
            <SectionTitle
                SubHeader={'Check it out'}
                Header={'From our menu'}
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    items.map(item=> <MenuItem 
                        key={item._id}
                        item={item}
                        ></MenuItem> )
                }
            </div>

        </section>
    );
};

export default PopularItem;