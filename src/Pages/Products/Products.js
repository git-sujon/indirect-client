import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import Spinner from '../Shared/Spinner/Spinner';
import ProductCard from './ProductCard';

const Products = () => {
    const category= useLoaderData()
    const [product, setProduct] = useState()
    const [booking, setBooking] = useState(null)
    
   
    
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products", category?.catagoriesName],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/products?category=${category.catagoriesName}`);
          const data = await res.json();
          return data;
        },
      });
     
      if(isLoading){
        <Spinner></Spinner>
    }
    return (
        <div className='container px-5 mx-auto my-20'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                products.map(product => <ProductCard setProduct={setProduct} key={product._id} product= {product}></ProductCard>)
            }
           </div>
           {
            !booking && <ConfirmationModal product={product} setBooking={setBooking}></ConfirmationModal>
           }
           
        </div>
    );
};

export default Products;