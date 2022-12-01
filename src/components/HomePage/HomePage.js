import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import HomePageTab from './HomePageTab';

const HomePage = () => {
    return (
        <>
            <Header />
            <HomePageTab />
            <Products />
        </>
    );
}

export default HomePage;