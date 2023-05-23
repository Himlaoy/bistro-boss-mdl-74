import React from 'react';

const SectionTitle = ({Header, SubHeader}) => {
    return (
        <div className='text-center my-5 md:w-3/12 mx-auto space-y-2 '>
            <p className='text-yellow-600 '>{SubHeader}</p>
            <p className='uppercase text-xl border-y'>{Header}</p>
        </div>
    );
};

export default SectionTitle;