import React, { useState } from 'react';
import Cover from '../Cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderCard from '../OrderCard/OrderCard';

const Order = () => {

    const [taIndex, setTabIndex] = useState(0)
    const [menu] = useMenu([])

    const Dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Cover img={orderImg} title={'Order Food'}></Cover>
            <Tabs defaultIndex={taIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;