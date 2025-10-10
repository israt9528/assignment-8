import React from 'react';
import dwnImg from '../../assets/icon-downloads.png'
import ratImg from '../../assets/icon-ratings.png'

const InstalledApp = ({app, handleRemove}) => {
    const {image, title, downloads, ratingAvg, size, id } = app

   
    return (
        <div>
            <div className='bg-white flex max-md:flex-col gap-5 max-md:items-start p-4 justify-between items-center mb-5 rounded'>
            <div className='flex gap-4 items-center'>
                <img className='w-[80px] h-[80px] rounded' src={image} alt="" />
                <div className=''>
                    <h2 className='font-medium text-left mb-5 max-md:mb-2'>{title}</h2>
                    <div className='flex gap-5'>
                        <span className='flex items-center gap-2 text-[#00d390] font-medium'>
                            <img className='w-[15px] h-[15px]' src={dwnImg} alt="" />
                            {downloads}
                        </span>
                        <span className='flex items-center gap-2 text-[#FF8811] font-medium'>
                            <img className='w-[15px] h-[15px]' src={ratImg} alt="" />
                            {ratingAvg}
                        </span>
                        <span className='text-[#627382]'>{size}</span>
                    </div>
                </div>
            </div>
          <button onClick={() => handleRemove(id)} 
          className='bg-[#00d390] rounded px-5 py-2 text-white font-medium'>Uninstall</button>
        </div>

     </div>
    );
};

export default InstalledApp;