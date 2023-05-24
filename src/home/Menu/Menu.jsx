import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Pages/Cover/Cover';
import img1 from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../components/SectiionTitle/SectionTitle';
import useMenu from '../../Hooks/useMenu';
import MenuCategory from '../../Pages/MenuCategory/MenuCategory';
import img2 from '../../assets/menu/dessert-bg.jpeg'
import img3 from '../../assets/menu/pizza-bg.jpg'
import img4 from '../../assets/menu/salad-bg.jpg'
import img5 from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu([])
    const Dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>

            </Helmet>
            <Cover title={'Our menu'} img={img1}></Cover>
            <SectionTitle SubHeader={"Don't miss"} Header={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}  title={''}></MenuCategory>
            <MenuCategory items={Dessert}  title={'Dessert'} img={img2}></MenuCategory>
            <MenuCategory items={pizza}  title={'Pizza'} img={img3}></MenuCategory>
            <MenuCategory items={salad}  title={'Salad'} img={img4}></MenuCategory>
            <MenuCategory items={soup}  title={'Soup'} img={img4}></MenuCategory>

        </div>
    );
};

export default Menu;