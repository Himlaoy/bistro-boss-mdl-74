import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                {
                    items.map(so => <OrderCard key={so._id} item={so}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;