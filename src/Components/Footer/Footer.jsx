import React from 'react';
import logoImg from '../../assets/logo.png'
import '../Header/Navbar/Navbar.css'
import { ImGithub } from "react-icons/im";
import { useNavigate } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    const navigate = useNavigate()
    
    return (
        <div className='bg-[#001931] p-10'>
            <div className='max-w-[1300px] mx-auto text-white flex max-md:flex-col gap-8 justify-between border-b border-[#E5E7EB30] pb-10'>
                    <div onClick={() => navigate('/')} className='flex items-center gap-2'>
                        <img className='w-[40px]' src={logoImg} alt="" />
                        <a className="text-2xl font-bold logo">HERO.IO</a>
                </div>
                <div className='flex max-lg:grid max-lg:grid-cols-2 gap-10 justify-between w-4/5  max-lg:ml-10 max-md:ml-0'>
                <div>
                    <h1 className='text-xl font-medium text-[#ffffffcf] mb-3'>Privacy Policy</h1>
                    <ul className='text-[#627382] list-none'>
                        <li>Your privacy controls</li>
                        <li>About this policy</li>
                        <li>Key terms</li>
                        <li>Related privacy practices</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium text-[#ffffffcf] mb-3'>Terms of Service</h1>
                    <ul className='text-[#627382] list-none'>
                        <li>Using Web station</li>
                        <li>Content in Web services</li>
                        <li>About these terms</li>
                        <li>Updates</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium text-[#ffffffcf] mb-3'>Technology</h1>
                    <ul className='text-[#627382] list-none'>
                        <li>Advertising</li>
                        <li>How Web Station uses cookies</li>
                        <li>How Web Station retains data </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium text-[#ffffffcf] mb-3'>Social Links</h1>
                    <div className='flex gap-5'>
                    <span><FaFacebook /></span>
                    <span><FaLinkedin /></span>
                    <span><IoLogoGithub /></span>
                    </div>
                </div>
                 </div>
            </div>
            <div className='text-[#627382] mt-7 text-center'>
                <p>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;