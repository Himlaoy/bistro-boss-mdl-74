import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                {
                    items.map(item => <OrderCard key={item._id} item={item}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;