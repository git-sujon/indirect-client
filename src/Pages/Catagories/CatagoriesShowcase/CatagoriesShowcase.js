import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import axios from 'axios';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import CatagoriesCard from '../CatagoriesCard/CatagoriesCard';

const CatagoriesShowcase = () => {

  
    const {data:catagories = [] , isLoading} = useQuery({
        queryKey:['catagories'],
        queryFn: ()=>{
          const data = axios.get(`https://server-git-sujon.vercel.app/catagories`)
          return data
        }
      })

if(isLoading){
    return <Spinner></Spinner>
}

    return (
        <div className='my-32'>
               <h2 className="text-center text-4xl font-semibold  mb-32 uppercase text-gray-700">
            Explore More
          </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                catagories?.data?.map(category => <CatagoriesCard key={category._id} category={category} ></CatagoriesCard>)
            }
            </div>
        </div>
    );
};

export default CatagoriesShowcase;