import React from 'react';
import { useNavigate } from 'react-router';
import Apps from '../Apps/Apps';
import '../../Components/Header/Navbar/Navbar.css'
import useApps from '../../Hooks/useApps';
import Loading from '../Loading/Loading';


const TopApps = () => {
    const {apps, loading} = useApps()
    const navigate = useNavigate()

    const topApps = apps.slice(0,8)

    if(loading) 
        return <Loading></Loading>
    
    return (
        <div className='p-20 text-center bg-[#f9f9f9] max-lg:p-10'>
            <h1 className='text-5xl font-bold mb-4'>Trending Apps</h1>
            <p className='text-[#627382] text-lg'>Explore All Trending Apps on the Market developed by us</p>
            <div className='my-10 grid grid-cols-4 gap-4 max-w-[1300px] mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3'>
               {
                topApps.map(app => <Apps key={app.id} app={app}></Apps>)
               }
            </div>
            <button onClick={() => navigate('/allApps')} 
            className='bg text-white px-6 py-3 rounded font-medium'>Show All</button>

        </div>
    );
};

export default TopApps;