import React from 'react';
import Banner from '../../Components/Banner/Banner';
import States from '../../Components/States/States';
import TopApps from '../../Components/TopApps/TopApps';
import useApps from '../../Hooks/useApps';
import Loading from '../../Components/Loading/Loading';

const Home = () => {
    const {loading} = useApps()


    if(loading) 
        return <Loading></Loading>

    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TopApps></TopApps>
        </div>
    );
};

export default Home;