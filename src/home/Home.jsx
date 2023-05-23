import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularItem from '../Pages/PopularItem/PopularItem';
import Featured from '../Pages/Featured/Featured';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;