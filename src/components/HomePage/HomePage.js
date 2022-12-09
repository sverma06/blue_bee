import React from 'react';
import Header from '../Header/Header';
import ProductsList from '../Products/ProductsList';
import HomePageTab from './HomePageTab';

const HomePage = () => {
    return (
        <>
            <Header />
            <HomePageTab />
            <ProductsList />
        </>
    );
}

export default HomePage;