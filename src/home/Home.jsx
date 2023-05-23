import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularItem from '../Pages/PopularItem/PopularItem';
import Featured from '../Pages/Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import BistroBoss from './Bistro/BistroBoss';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularItem></PopularItem>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;