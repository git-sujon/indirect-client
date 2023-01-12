import React from 'react';
import { BuildingOfficeIcon, HomeIcon, HomeModernIcon  } from '@heroicons/react/24/solid'

const Counter = () => {
    return (
      <div className='text-white bg-[#072f60] '>
          <div className='py-5 px-10 flex items-center justify-between'>
            {/* part 1  */}
            <div className='flex items-center gap-x-5'>
                <HomeIcon className='w-20'></HomeIcon>
                <div>
                    <p className='text-6xl font-bold'>234+</p>
                    <p className='text-xs'>Homes are sell</p>
                </div>
            </div>

            
            {/* part 2  */}
            <div className='flex items-center gap-x-5'>
                <BuildingOfficeIcon className='w-20'></BuildingOfficeIcon>
                <div>
                    <p className='text-6xl font-bold'>434+</p>
                    <p className='text-xs'>Apartments are sell</p>
                </div>
            </div>

            
            {/* part 3  */}
            <div className='flex items-center gap-x-5'>
                <HomeModernIcon className='w-20'></HomeModernIcon>
                <div>
                    <p className='text-6xl font-bold'>334+</p>
                    <p className='text-xs'>Office Space are sell</p>
                </div>
            </div>


        </div>
      </div>
    );
};

export default Counter;