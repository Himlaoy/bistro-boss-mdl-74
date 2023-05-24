import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div>
            <div >

                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                            {
                                items.map(item => <OrderCard key={item._id} item={item}></OrderCard>)
                            }

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default OrderTab;