import React from 'react';
import './Featured.css'
import SectionTitle from '../../components/SectiionTitle/SectionTitle';
import img from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white py-8'>
            <SectionTitle
            SubHeader={'---Check it out---'}
            Header={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='md:flex md:gap-4 py-8 bg-slate-500 bg-opacity-30 px-16 justify-center items-center'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className='Aug, 2023'></p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda mollitia quis! Hic sapiente ea autem nam placeat ad magni sed adipisci impedit dicta. Possimus, laborum provident. Quaerat dolor, possimus ut quidem eum nesciunt fugit error repudiandae! Temporibus ipsa quas ex dolorem unde excepturi dolor! Libero itaque minima sequi at.</p>

                    <button className="btn btn-outline border-0 border-b-4">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;