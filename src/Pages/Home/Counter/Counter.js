import React from 'react';
import { HomeModernIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

const Counter = () => {
    return (
      <div className='text-white bg-[#072f60] my-32'>
          <div className='py-10 px-20'>
            {/* part 1  */}
            <div className='flex items-center gap-x-5'>
                <HomeModernIcon className='w-20'></HomeModernIcon>
                <div>
                    <p className='text-6xl font-bold'>234+</p>
                    <p className='text-xs'>Homes are sell</p>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Counter;