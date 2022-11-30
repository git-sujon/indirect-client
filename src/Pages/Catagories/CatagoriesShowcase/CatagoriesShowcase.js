import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import axios from 'axios';
import React from 'react';
import CatagoriesCard from '../CatagoriesCard/CatagoriesCard';

const CatagoriesShowcase = () => {

  
    const {data:catagories = [] , isLoading} = useQuery({
        queryKey:['catagories'],
        queryFn: ()=>{
          const data = axios.get(`http://localhost:5000/catagories/`)
          return data
        }
      })

      console.log(catagories?.data);


    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                catagories?.data?.map(category => <CatagoriesCard key={category._id} category={category} ></CatagoriesCard>)
            }
            </div>
        </div>
    );
};

export default CatagoriesShowcase;