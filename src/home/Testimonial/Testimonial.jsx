import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectiionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div>
            <SectionTitle
                SubHeader={'--- What Our Client Say'}
                Header={'TESTIMONIALS'}

            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide></SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Testimonial;