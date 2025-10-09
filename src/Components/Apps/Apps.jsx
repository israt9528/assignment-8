import React from 'react';
import dwnImg from '../../assets/icon-downloads.png'
import ratImg from '../../assets/icon-ratings.png'
import { useNavigate } from 'react-router';
import '../../Components/Header/Navbar/Navbar.css'

const Apps = ({app}) => {

   const navigate = useNavigate()

    const {image, title, downloads, ratingAvg, id} = app;
    return (
        <div onClick={() => navigate(`/appDetails/${id}`)} className='p-4 rounded bg-white sh hover:scale-95 transition ease-in'>
            <img className='rounded w-full h-[300px]' src={image} alt="" />
            <h2 className='font-medium my-3 text-left text-lg'>{title}</h2>
            <div className='flex justify-between '>
                <div className='flex gap-2 font-medium items-center text-[#00d390] bg-[#F1F5E8] px-2 py-1 rounded'>
                    <img className='w-[15px] h-[15px]' src={dwnImg} alt="" />
                    {downloads}
                </div>
                <div className='flex gap-2 font-medium items-center text-[#FF8811] bg-[#F1F5E8] px-2 py-1 rounded'>
                    <img className='w-[15px] h-[15px]' src={ratImg} alt="" />
                    {ratingAvg}
                </div>
            </div>
        </div>
    );
};

export default Apps;