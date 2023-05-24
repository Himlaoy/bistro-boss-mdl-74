import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularItem from '../Pages/PopularItem/PopularItem';
import Featured from '../Pages/Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import BistroBoss from './Bistro/BistroBoss';
import ContactUs from './Contact/ContactUs';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularItem></PopularItem>
            <ContactUs></ContactUs>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;