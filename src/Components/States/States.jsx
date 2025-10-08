import React from 'react';
import '../Header/Navbar/Navbar.css'

const States = () => {
    return (
        <div className='bg text-center py-20 text-white px-10'>
             <h1 className='text-5xl font-bold mb-10 max-lg:text-4xl'>Trusted by Millions, Built for You</h1>
             <div className='lg:flex gap-6 justify-center space-y-10'>
             <div className='px-20 '>
                <p>Total Downloads</p>
                <h1 className='text-7xl font-bold my-4'>29.6M</h1>
                <p>21% more than last month</p>
             </div>
             <div className='px-20'>
                <p>Total Reviews</p>
                <h1 className='text-7xl font-bold my-4'>906K</h1>
                <p>46% more than last month</p>
             </div>
             <div className='px-20'>
                <p>Active Apps</p>
                <h1 className='text-7xl font-bold my-4'>132+</h1>
                <p>31 more will Launch</p>
             </div>
             </div>

        </div>
    );
};

export default States;