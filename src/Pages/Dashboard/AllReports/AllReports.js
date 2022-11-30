import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const AllReports = () => {
    const { user } = useContext(AuthContext);
  
  
    const {
      data: products = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["products", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `https://server-git-sujon.vercel.app/reportedProduct`
        );
        const data = await res.json();
        return data;
      },
    });
 

    const deleteHandler = (product) => {
  
      fetch(`https://server-git-sujon.vercel.app/reportedProduct/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount > 0){
    
            deleteOrginalProduct(product)
           
          }
         
        
        });
    };

    const deleteOrginalProduct = (product) => {
        fetch(`https://server-git-sujon.vercel.app/products/${product.origin_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.deletedCount > 0){
                toast.success(`${product.Property_Name} is Deleted`);
                refetch()
              }
             
              
            });
    }


   
    // const dateTime = new Date(Timestamp);
    // const dividingTime = dateTime?.toLocaleString()?.split(":");
    // const showingTime =
    //   dividingTime[0] + ":" + dividingTime[1] + " " + dividingTime[2].slice(-2);

    return (
        <div>
      {products?.length === 0 && 
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <p className="text-red-900 text-3xl lg:text-5xl font-bold">No Product Reported Yet</p>
        <Link to='/dashboard/allProducts' className="btn btn-neutral text-white font-bold mt-4">Check all Product</Link>
      </div> }
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="bg-neutral">
            <tr>
              <th>Property</th>
              <th>Reported Time</th>
              <th>Price</th>
             
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {products.map((product) => (
              <tr className="" key={product?._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product?.productPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.Property_Name}</div>
                      <div className="text-sm opacity-50">
                        {product?.Location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-neutral text-sm font-semibold">
                   {product?.showingTime}
                  </p>
                </td>
                <td className="text-neutral text-sm font-semibold">
                  ${product?.Selling_Price}
                </td>
               
                <td>
                  <button
                    onClick={() => deleteHandler(product)}
                    className="btn btn-warning btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
    );
};

export default AllReports;