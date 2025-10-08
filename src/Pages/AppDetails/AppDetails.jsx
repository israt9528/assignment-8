import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dwnImg from '../../assets/icon-downloads.png'
import ratImg from '../../assets/icon-ratings.png'
import revImg from '../../assets/icon-review.png'
import '../../Components/Header/Navbar/Navbar.css'

const AppDetails = () => {

   const {id} = useParams()
   const Id = parseInt(id)
   const apps = useLoaderData()
   console.log(Id, apps);

   
    const clickedApp = apps.find(app => app.id===Id)
    console.log(clickedApp);
    const {image, title, description, downloads, ratingAvg, ratings, reviews, companyName, size} = clickedApp


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
                    <button className='bg-[#00d390] rounded px-5 py-3 text-white font-medium'>Install now</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;