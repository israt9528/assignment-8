import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dwnImg from '../../assets/icon-downloads.png'
import ratImg from '../../assets/icon-ratings.png'
import revImg from '../../assets/icon-review.png'
import '../../Components/Header/Navbar/Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

   
   const {id} = useParams()
   const Id = parseInt(id)
   const apps = useLoaderData()
   const [clicked, setClicked] = useState(false)
   
    const clickedApp = apps.find(app => app.id===Id)
    const {image, title, description, downloads, ratingAvg, ratings, reviews, companyName, size} = clickedApp


    const handleInstallation = () => {
        setClicked(true)
        const existingList = JSON.parse(localStorage.getItem('installApps'))
        let updateList  = []
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === clickedApp.id)
            if(isDuplicate) 
                return toast('Already Installed')
            else
                 updateList = [...existingList, clickedApp]
        }
        else {
            updateList.push(clickedApp)
        }
        localStorage.setItem('installApps', JSON.stringify(updateList))
        toast('Successfully Installed!')
      
    }


    return (
        <div className='bg-[#f9f9f9] p-20 max-lg:p-10 '>
            <div className='flex max-md:flex-col gap-10 pb-10 border-b border-[#00193120] max-md:text-center'>
                <img className='w-[350px] h-[350px] sh rounded max-md:mx-auto' src={image} alt="" />
                <div className='w-full'>
                    <div className='border-b border-[#00193120]'>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p className='text-lg mt-2 mb-7 text-[#627382] max-lg:text-[16px]'>Developed by: <span className='font-bold logo'>{companyName}</span></p>
                    </div>
                    <div className='flex gap-10 text-center my-9'>
                        <div>
                             <img className='w-[40px] h-[40px] mx-auto max-lg:w-[30px] max-lg:h-[30px]' src={dwnImg} alt="" />
                             <p className='text-[#627382] my-2 max-md:text-sm'>Downloads</p>
                             <h1 className='text-4xl font-bold max-md:text-3xl'>{downloads}</h1>
                        </div>
                        <div>
                            <img className='w-[40px] h-[40px] mx-auto max-lg:w-[30px] max-lg:h-[30px]' src={ratImg} alt="" />
                             <p className='text-[#627382] my-2 max-md:text-sm'>Average Ratings</p>
                             <h1 className='text-4xl font-bold max-md:text-3xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='w-[40px] h-[40px] mx-auto max-lg:w-[30px] max-lg:h-[30px]' src={revImg} alt="" />
                             <p className='text-[#627382] my-2 max-md:text-sm'>Total Reviews</p>
                             <h1 className='text-4xl font-bold max-md:text-3xl'>{reviews}</h1>
                        </div>
                    </div>
                    <button onClick={()=>handleInstallation()} 
                    disabled={clicked}
                    className='bg-[#00d390] rounded px-5 py-3 text-white font-medium'>
                        {clicked? 'Installed' : `Install Now (${size})`}</button>
                        <ToastContainer />
                </div>
            </div>

            <div className='my-20 h-[400px]'>
                <h2 className='text-2xl font-bold mb-8'>Ratings</h2>
                  
                 <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={ratings}
          
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type='category'  />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={35} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer> 


                 
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Description</h1>
                <p className='text-[#627382] my-2'>{description}</p>
            </div>


        </div>
    );
};

export default AppDetails;