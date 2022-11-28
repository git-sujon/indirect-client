import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';

const AllSeller = () => {

    const [toggle, setToggle] = useState(true);
    const {data:users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
           const res= await fetch(`https://server-git-sujon.vercel.app/sellers?accountType=Seller`)
           const data = await res.json()
           return data
        }
    })
    console.log(users);

    const varifingHandler = (user) => {
        fetch(`https://server-git-sujon.vercel.app/users/${user?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ isVerified: toggle }),
            
        })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          {
            user?.isVerified?.isVerified
              ? toast.error(`Verify Undone`)
              : toast.success(`User Verified `);
          }
          setToggle(!toggle);
          refetch();

        //   fetch(`https://server-git-sujon.vercel.app/products?isVerified=isVerified`,{
        //     method: 'GET',
        //     headers: {
        //         "content-type": "application/json",
        //       },
        //     //   body: JSON.stringify({ isVerified: toggle }),
        //   })
        //   .then((res) => res.json())
        //   .then((data) =>{
        //     console.log(data)
            
        //   })
       
        }
      });
    }

    const deleteUserHndler = (user) => {
        fetch(`https://server-git-sujon.vercel.app/users/${user?._id}`, {
            method: "DELETE",
            
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
    }

    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div>
        <div className="overflow-x-auto w-full">
   <table className="table w-full">
     {/* <!-- head --> */}
     <thead className="bg-neutral">
       <tr className='text-left'>
         <th className=''>Account</th>
         <th>Buyer/Seller Verified Status</th>
         <th className='text-center'>Verify</th>
         <th className='text-center'>Delete</th>
       </tr>
     </thead>
     <tbody>
       {/* <!-- row 1 --> */}

       {users.map((user) => (
           
         <tr key={user?._id}>
           <td>
             <div className="flex items-center space-x-3 text-left">
               <div className="avatar">
                 <div className="mask mask-squircle w-12 h-12">
                   <img
                     src={user?.photo}
                     alt="Avatar Tailwind CSS Component"
                   />
                 </div>
               </div>
               <div>
                 <div className="font-bold">{user?.name}</div>
                 <div className="text-sm opacity-50">
                   {user?._id}
                 </div>
               </div>
             </div>
           </td>
           <td>
             <p className="text-neutral text-sm font-semibold flex items-center justify-between w-1/2">
                {
                    //   
                    (user?.isVerified?.isVerified ?
                        <>{<>{'Verified'} <CheckBadgeIcon className="h-5 w-5 ml-2 text-blue-500"></CheckBadgeIcon></>}</> 
                        :
                        
                        <>{<>{'Not Verified'} <CheckBadgeIcon className="h-5 w-5 ml-2 text-red-500"></CheckBadgeIcon></>}</> )
                }
               
             </p>
      
           </td>
         
           <td className="flex items-center justify-center ">
           <button 
               onClick={() => varifingHandler(user)}
               className="btn btn-neutral btn-md hover:btn-primary text-center  text-white font-semibold"
             >
                Make Verified
             </button>
           </td>
           <td className="text-center">
             <button 
               onClick={() => deleteUserHndler(user)}
               className="btn btn-neutral btn-md  hover:btn-primary text-white font-semibold"
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

export default AllSeller;