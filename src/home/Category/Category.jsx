import React from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectiionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle 
            SubHeader= {'---From 11:00am to 10:00pm---'}
            Header={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-4xl text-center uppercase text-black -mt-20'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='text-4xl text-center uppercase text-black -mt-20'>Pitza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='text-4xl text-center uppercase text-black -mt-16'>soupes</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='text-4xl text-center uppercase text-black -mt-16'>desert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className='text-4xl text-center uppercase text-black -mt-20'>Salad</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;