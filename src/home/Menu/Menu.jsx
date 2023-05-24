import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Pages/Cover/Cover';
import img1 from '../../assets/menu/banner3.jpg'
import PopularItem from '../../Pages/PopularItem/PopularItem';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
                
            </Helmet>
            <Cover title={'Our menu'} img={img1}></Cover>
            <PopularItem></PopularItem>
            <PopularItem></PopularItem>
            <PopularItem></PopularItem>
        </div>
    );
};

export default Menu;