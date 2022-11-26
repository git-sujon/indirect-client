import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const category= useLoaderData()
   
    
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products", category?.catagoriesName],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/products?category=${category.catagoriesName}`);
          const data = await res.json();
          return data;
        },
      });
     

    return (
        <div className='container px-5 mx-auto my-20'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                products.map(product => <ProductCard key={product._id} product= {product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Products;