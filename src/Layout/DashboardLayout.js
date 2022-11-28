import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {

    const {userEmailQueryData, emailData, user} = useContext(AuthContext)

    useEffect(()=> {
        userEmailQueryData(user?.email)
    }, [user?.email])


 

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboardOpen" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardOpen" className="drawer-overlay"></label>
        
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <div>
            <div class="text-center mr-10    my-12">
              <img
                src={emailData?.photo}
                class="rounded-full w-32 mb-4 mx-auto"
                alt="Avatar"
              />
              <h5 class="text-xl font-medium leading-tight mb-2">{emailData?.name}</h5>
              <p class="text-gray-500">{emailData?.email}</p>
              <p class="text-neutral font-bold">{emailData?.accountType}</p>
  
            </div>
          </div>

           {
            (emailData?.accountType === 'Seller' || emailData?.isAdmin)  &&
            <>
             <li>
              <Link to="/dashboard">My Products</Link>
            </li>

            <li>
              <Link to="/dashboard/addProducts">Add Products</Link>
            </li>
            </>
           }


            {
                (emailData?.accountType === 'Buyer' || emailData?.isAdmin ) &&
                <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
  
            }

           {

            emailData?.isAdmin && 
            <>
             <li>
              <Link to="/dashboard/allSellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/allBuyers">All Buyers</Link>
            </li>
            
            </>
           }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
