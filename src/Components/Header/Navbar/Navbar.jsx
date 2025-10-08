import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../../assets/logo.png'
import './Navbar.css'
import { ImGithub } from "react-icons/im";




const Navbar = () => {
    const Links = <>
    <div className='lg:flex gap-8 font-medium'>
    <NavLink to='/'><li>Home</li></NavLink>
    <NavLink to='/allApps'><li>Apps</li></NavLink>
    <NavLink to='/installedApps'><li>Installation</li></NavLink>
    </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm lg:px-10">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <div className='flex items-center gap-2'>
        <img className='w-[40px]' src={logoImg} alt="" />
    <a className="text-2xl font-bold logo">HERO.IO</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg text-white">
        <ImGithub />
        Contribute</a>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;