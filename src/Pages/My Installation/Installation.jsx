import React, { useEffect } from 'react';
import useApps from '../../Hooks/useApps';
import { useState } from 'react';
import { getStoredData } from '../../Utilities/StoreData';
import InstalledApp from '../../Components/InstalledApp/InstalledApp';

const Installation = () => {
    const {apps} = useApps()
    console.log(apps);
    
    const [installed, setInstalled] = useState([])
    // const [sort, setSort] = useState('')
    
    
    useEffect(()=>{
        const storedData = getStoredData()
        const data = storedData.map(id => parseInt(id))
          console.log(data , storedData);

        const installedApps = apps.filter(app => data.includes(app.id))
        console.log(installedApps);
        setInstalled(installedApps)
        
    }, [])

    // const handleSort = (type) => {
    //     setSort(type)
    //   if(sort==='high-low'){
    //     const sorted = [...installed].sort((a,b) => b.downloads-a.downloads)
    //     setInstalled(sorted)
    //   }
    //   if(sort==='low-high'){
    //     const sorted = [...installed].sort((a,b) => a.downloads-b.downloads)
    //     setInstalled(sorted)
    //   }
    // }
   
    

    return (
        <div className='p-20 text-center bg-[#f9f9f9]'>
            <h1 className='text-5xl font-bold mb-4'>Your Installed Apps</h1>
            <p className='text-[#627382] text-lg'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between pt-20'>
                <p className='text-lg font-medium'>({installed.length}) Apps Found</p>
                <div className="dropdown dropdown-bottom">
                 <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                   <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                     <li onClick={()=> handleSort('high-low')}><a>High-Low</a></li>
                     <li onClick={()=> handleSort('low-high')}><a>Low-High</a></li>
                    </ul>
                 </div>
            </div>
            <div className='my-10 gap-4'>
               {
                installed.map(app => <InstalledApp key={app.id} app={app}></InstalledApp>)
               }
            </div>
        </div>
    );
};

export default Installation;