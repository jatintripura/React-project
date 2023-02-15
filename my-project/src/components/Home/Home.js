import React from 'react';
import Alubums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner/>
            <Services/>
            <Alubums/>
        </>
    );
};

export default Home;