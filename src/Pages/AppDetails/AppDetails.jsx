import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dwnImg from '../../assets/icon-downloads.png'
import ratImg from '../../assets/icon-ratings.png'
import revImg from '../../assets/icon-review.png'
import '../../Components/Header/Navbar/Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Bar, BarChart, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

   
   const {id} = useParams()
   const Id = parseInt(id)
   const apps = useLoaderData()
   const [clicked, setClicked] = useState(false)
   
    const clickedApp = apps.find(app => app.id===Id)
    const {image, title, description, downloads, ratingAvg, ratings, reviews, companyName} = clickedApp


    const handleInstallation = () => {
        setClicked(true)
        toast('Successful!')
        const existingList = JSON.parse(localStorage.getItem('installApps'))
        let updateList  = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === clickedApp.id)
            if(isDuplicate) return alert('already exist')
                updateList = [...existingList, clickedApp]
        }
        else 
            updateList.push(clickedApp)
        localStorage.setItem('installApps', JSON.stringify(updateList))

    }


    return (
        <div className='bg-[#f9f9f9] p-20'>
            <div className='flex gap-10 pb-10 border-b border-[#00193120]'>
                <img className='w-[350px] h-[350px] sh rounded' src={image} alt="" />
                <div className='w-full'>
                    <div className='border-b border-[#00193120]'>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p className='text-lg mt-2 mb-7 text-[#627382]'>Developed by: <span className='font-bold logo'>{companyName}</span></p>
                    </div>
                    <div className='flex gap-10 text-center my-9'>
                        <div>
                             <img className='w-[40px] h-[40px] mx-auto' src={dwnImg} alt="" />
                             <p className='text-[#627382] my-2'>Downloads</p>
                             <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div>
                            <img className='w-[40px] h-[40px] mx-auto' src={ratImg} alt="" />
                             <p className='text-[#627382] my-2'>Average Ratings</p>
                             <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='w-[40px] h-[40px] mx-auto' src={revImg} alt="" />
                             <p className='text-[#627382] my-2'>Total Reviews</p>
                             <h1 className='text-4xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <button onClick={()=>handleInstallation()} 
                    disabled={clicked}
                    className='bg-[#00d390] rounded px-5 py-3 text-white font-medium'>
                        {clicked? 'Installed' : 'Install Now'}</button>
                        <ToastContainer />
                </div>
            </div>

            <div className='my-20'>
                <h2 className='text-2xl font-bold'>Ratings</h2>
                 
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Description</h1>
                <p className='text-[#627382] my-2'>{description}</p>
            </div>


        </div>
    );
};

export default AppDetails;