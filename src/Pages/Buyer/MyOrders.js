import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
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

//       const dateTime = new Date(Timestamp);
//   const dividingTime = dateTime?.toLocaleString()?.split(":");
//   const showingTime =
//     dividingTime[0] + ":" + dividingTime[1] + " " + dividingTime[2].slice(-2);


    return (
        <div>
             <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="bg-neutral">
            <tr>
              <th>Property</th>
              <th>Seller information's</th>
              {/* <th>Booking Time</th> */}
              <th>Price</th>
              <th>Pay Now</th>
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
                <td>
                  <p className="text-neutral text-sm font-semibold">
                    {booking?.sellerName}
                  </p>
                  <p className='text-sm'>{booking.Phone_Number}</p>
                </td>
                {/* <td className="text-neutral text-sm font-semibold">
                  {booking?.Timestamp}
                </td> */}
                <td className="flex items-center">
                ${booking?.productPrice}
                </td>
                <td>
                  <Link to={`/payment/${booking._id}`}
                    // onClick={() => payNowHandler(booking)}
                    className="btn btn-neutral  hover:btn-primary text-white font-semibold"
                  >
                    Pay Now
                  </Link>
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