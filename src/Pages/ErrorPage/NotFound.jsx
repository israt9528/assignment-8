import React from 'react';
import pageError from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';


const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className='text-center py-20 bg-[#f9f9f9]'>
                        <img className='mx-auto mb-5' src={pageError} alt="" />
                        <h1 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                        <p className='my-5 font-medium text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                        <button onClick={() => navigate('/')} className='bg px-5 py-2 rounded text-white'>Go Back</button>
                    </div>
    );
};

export default NotFound;