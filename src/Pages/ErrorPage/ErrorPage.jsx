import React from 'react';
import error from '../../assets/error-404.png'
import '../../Components/Header/Navbar/Navbar.css'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate()

    return (
        <div className='text-center py-20 bg-[#f9f9f9]'>
            <img className='mx-auto mb-5' src={error} alt="" />
            <h1 className='text-5xl font-semibold'>Oops, page not found!</h1>
            <p className='my-5 font-medium text-[#627382]'>The page you are looking for is not available.</p>
            <button onClick={() => navigate('/')} className='bg px-5 py-2 rounded text-white'>Go Back</button>
        </div>
    );
};

export default ErrorPage;