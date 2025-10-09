import React from 'react';
import Apps from '../../Components/Apps/Apps';
import useApps from '../../Hooks/useApps';
import { useState } from 'react';
import AppError from '../../Components/AppError/AppError';
import Loading from '../../Components/Loading/Loading';

const AllApps = () => {
    const {apps,loading} = useApps()

    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(false)
    
    const item = search.trim().toLocaleLowerCase()
    const searchedProducts = item ? 
        apps.filter(app => app.title.toLocaleLowerCase().includes(search))
        : apps

      


    if(loading) 
        return <Loading></Loading>
    
    return (
        <div className='p-20 text-center bg-[#f9f9f9] max-lg:p-10'>
            <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
            <p className='text-[#627382] text-lg'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex max-md:flex-col max-md:gap-5 max-md:items-start justify-between pt-20'>
                <p className='text-lg font-medium'>({searchedProducts.length}) Apps Found</p>
                <label className="input">
                   <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g
                         strokeLinejoin="round"
                         strokeLinecap="round"
                         strokeWidth="2.5"
                         fill="none"
                         stroke="currentColor"
                       >
                         <circle cx="11" cy="11" r="8"></circle>
                         <path d="m21 21-4.3-4.3"></path>
                        </g>
                     </svg>
                     <input onChange={e => {
                        setSearch(e.target.value)
                        // setLoader(!loader)
                     }} 
                     defaultValue={search} type="search" required placeholder="Search" />
                </label>
            </div>

           {
            loading && <Loading></Loading>
           }



            {
                searchedProducts.length === 0 ? 
                <AppError></AppError> : 
                <div className='my-10 grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3'>
               {
                searchedProducts.map(app => <Apps key={app.id} app={app}></Apps>)
               }
            </div>
            }
            
        </div>
    );
};

export default AllApps;