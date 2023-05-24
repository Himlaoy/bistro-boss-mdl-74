import React, { useState } from 'react';
import Cover from '../Cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {

    const [taIndex, setTabIndex] = useState(0)

    return (
        <div>
            <Cover img={orderImg} title={'Order Food'}></Cover>
            <Tabs defaultIndex={taIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;