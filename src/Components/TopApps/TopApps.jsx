import React from 'react';
import { useNavigate } from 'react-router';
import Apps from '../Apps/Apps';
import '../../Components/Header/Navbar/Navbar.css'
import useApps from '../../Hooks/useApps';


const TopApps = () => {
    const {apps, loading} = useApps()
    const navigate = useNavigate()

    const topApps = apps.slice(0,8)

    if(loading) 
        return <div className='text-3xl font-bold text-center mt-5'>
    <p>Loading.....<span className="loading loading-spinner loading-xl"></span></p>        
        </div>
    
    return (
        <div className='p-20 text-center bg-[#f9f9f9]'>
            <h1 className='text-5xl font-bold mb-4'>Trending Apps</h1>
            <p className='text-[#627382] text-lg'>Explore All Trending Apps on the Market developed by us</p>
            <div className='my-10 grid grid-cols-4 gap-4 max-w-[1300px] mx-auto'>
               {
                topApps.map(app => <Apps key={app.id} app={app}></Apps>)
               }
            </div>
            <button onClick={() => navigate('/allApps')} className='bg text-white px-6 py-3 rounded font-medium'>Show All</button>

        </div>
    );
};

export default TopApps;