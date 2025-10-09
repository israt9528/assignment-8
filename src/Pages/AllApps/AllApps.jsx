import React from 'react';
import Apps from '../../Components/Apps/Apps';
import useApps from '../../Hooks/useApps';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import pageError from '../../assets/App-Error.png'

const AllApps = () => {
    const {apps,loading,error} = useApps()

    const [search, setSearch] = useState('')

    const navigate = useNavigate()
    
    const item = search.trim().toLocaleLowerCase()
    const searchedProducts = item ? 
        apps.filter(app => app.title.toLocaleLowerCase().includes(search))
        : apps

      if(searchedProducts.length === 0) {
        return <>
          
            <div className='text-center py-20 bg-[#f9f9f9]'>
                        <img className='mx-auto mb-5' src={pageError} alt="" />
                        <h1 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                        <p className='my-5 font-medium text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                        <button onClick={() => navigate(-1)} className='bg px-5 py-2 rounded text-white'>Go Back</button>
                    </div>
        </>
      }


    if(loading) 
        return <div className='text-3xl font-bold text-center mt-5'>
    <p>Loading.....<span className="loading loading-spinner loading-xl"></span></p>        
        </div>
    
    return (
        <div className='p-20 text-center bg-[#f9f9f9]'>
            <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
            <p className='text-[#627382] text-lg'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between pt-20'>
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
                     <input onChange={e => setSearch(e.target.value)} defaultValue={search} type="search" required placeholder="Search" />
                </label>
            </div>
            <div className='my-10 grid grid-cols-4 gap-4'>
               {
                searchedProducts.map(app => <Apps key={app.id} app={app}></Apps>)
               }
            </div>
        </div>
    );
};

export default AllApps;