import React from 'react';
import heroImg from '../../assets/hero.png'
import '../Header/Navbar/Navbar.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='bg-[#f9f9f9] flex flex-col items-center text-center pt-20 px-10'>
            <h1 className='text-7xl font-medium mb-4 max-md:text-5xl'>We Build <br /> <span className='logo font-bold'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-lg max-md:text-sm'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='space-x-4 mt-10'>
                <button className="btn">
                    <IoLogoGooglePlaystore />
                  Google Play
                </button>
                <button className="btn">
                    <FaAppStoreIos />
                  App Store
                </button>
                <div className='mt-10'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;