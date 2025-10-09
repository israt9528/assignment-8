import React, { useEffect } from 'react';
import useApps from '../../Hooks/useApps';
import { useState } from 'react';
import InstalledApp from '../../Components/InstalledApp/InstalledApp';

const Installation = () => {
    const {apps} = useApps()
    
    const [installed, setInstalled] = useState([])
    const [sort, setSort] = useState('')    
    
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('installApps'))
        if(savedList)
        setInstalled(savedList)
        
    }, [apps])
    
    const handleRemove = id => {
        const existingList = JSON.parse(localStorage.getItem('installApps'))
       let updateList = existingList.filter(app => app.id !== id)

       setInstalled(updateList)

        localStorage.setItem('installApps', JSON.stringify(updateList))
    }

    const sortedApps = (() => {
        if(sort=== 'desc') {
            return [...installed].sort((a,b) => b.downloads - a.downloads)
        }
        else if(sort === 'asc') {
            return [...installed].sort((a,b) => a.downloads - b.downloads)
        } 
        else
            return installed
    }
    ) ()


    

    return (
        <div className='p-20 text-center bg-[#f9f9f9]'>
            <h1 className='text-5xl font-bold mb-4'>My Installed Apps</h1>
            <p className='text-[#627382] text-lg'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between pt-20'>
                <p className='text-lg font-medium'>({sortedApps.length}) Apps Found</p>
                
            <select className='select select-bordered' 
               value={sort} 
               onChange={e => setSort(e.target.value)} >
                <option value="" disabled>Sort By Downloads</option>
                
                <option value="desc">High-Low</option>
                <option value="asc">Low-High</option>
            </select>


            </div>
            <div className='my-10 gap-4'>
               {
                sortedApps.map(app => <InstalledApp key={app.id} 
                    app={app}
                    handleRemove={handleRemove}></InstalledApp>)
               }
            </div>
        </div>
    );
};

export default Installation;