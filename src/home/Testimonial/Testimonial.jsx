import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectiionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle
                SubHeader={'--- What Our Client Say'}
                Header={'TESTIMONIALS'}

            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => (<SwiperSlide key={review._id}>

                        <div className='mx-20 py-10 space-y-2 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <p className='text-yellow-500'>{review.name}</p>
                        </div>
                    </SwiperSlide>))
                }


            </Swiper>

        </div>
    );
};

export default Testimonial;