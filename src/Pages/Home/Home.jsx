import React from 'react';
import Banner from '../../Components/Banner/Banner';
import States from '../../Components/States/States';
import TopApps from '../../Components/TopApps/TopApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TopApps></TopApps>
        </div>
    );
};

export default Home;