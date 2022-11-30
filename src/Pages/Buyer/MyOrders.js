import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://server-git-sujon.vercel.app/bookings?buyerEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });


  const deleteHandler = (booking) => {
    
    fetch(`https://server-git-sujon.vercel.app/bookings/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Booking Deleted`);
        refetch();
      });
  };

  //       const dateTime = new Date(Timestamp);
  //   const dividingTime = dateTime?.toLocaleString()?.split(":");
  //   const showingTime =
  //     dividingTime[0] + ":" + dividingTime[1] + " " + dividingTime[2].slice(-2);

  return (
    <div>
        {bookings?.length === 0 && 
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <p className="text-red-900 text-3xl lg:text-5xl font-bold">You Have No Order</p>
        <p className="text-2xl lg:text-3xl font-bold text-neutral">Please Order / Booking Something</p>
        <Link to='/category/63819333db36b3423f40dba1' className="btn btn-neutral text-white font-bold mt-4">Have a Look</Link>
      </div> }
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="bg-neutral">
            <tr>
              <th>Property</th>
        
              {/* <th>Booking Time</th> */}
              <th>Price</th>
              <th>Payment Status</th>
              <th>Pay Now</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {bookings.map((booking) => (
              <tr key={booking?._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking?.productPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.productName}</div>
                      <div className="text-sm opacity-50">
                        {booking?.propertyLocation}
                      </div>
                    </div>
                  </div>
                </td>
               
                {/* <td className="text-neutral text-sm font-semibold">
                  {booking?.Timestamp}
                </td> */}
                <td className="">${booking?.productPrice}</td>
                <td>{booking?.paid ? 'Paid' : 'Not Paid'}</td>

                <td>
                  {
                    !booking?.paid ?

                    <Link
                    to={`/dashboard/payment/${booking?._id}`}
                    
                    // onClick={() => payNowHandler(booking)}
                    className="btn btn-neutral  hover:btn-primary btn-xs text-white font-semibold"
                  >
                    Pay Now
                  </Link>
                  :
                  <button disabled className="btn btn-neutral btn-xs hover:btn-primary text-white font-semibold" >Pay Now</button>


                  }
                  
                </td>

                <td>
                <button
                    onClick={() => deleteHandler(booking)}
                    
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

export default MyOrders;
