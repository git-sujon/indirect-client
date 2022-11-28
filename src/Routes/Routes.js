import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import BlogDetails from '../Pages/Blog/BlogDetails/BlogDetails';
import MyOrders from '../Pages/Buyer/MyOrders';
import AllBuyers from '../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSeller from '../Pages/Dashboard/AllSeller/AllSeller';
import Payment from '../Pages/Dashboard/Payment/Payment';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import AddProducts from '../Pages/Seller/AddProducts';
import MyProducts from '../Pages/Seller/MyProducts';
import Register from '../Register/Register';

const Routes =  createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'category/:id',
                    element:<Products></Products>,
                    loader:({params})=> fetch(`https://server-git-sujon.vercel.app/catagories/${params.id}`)
                },
                {
                    path:'blog',
                    element:<Blog></Blog>,
                    loader:()=> fetch(`https://server-git-sujon.vercel.app/blogs`)
                },
                {
                    path:'blog/:id',
                    element:<BlogDetails></BlogDetails>,
                    loader:({params})=> fetch(`https://server-git-sujon.vercel.app/blogs/${params.id}`)
                },
           
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/Register',
                    element:<Register></Register>
                },
              
            
                {
                    path: '/payment/:id',
                    element:<Payment></Payment>,
                    loader:({params})=> fetch(`https://server-git-sujon.vercel.app/bookings/${params.id}`)
                },
                {
                    path:'/dashboard',
                    element: <DashboardLayout></DashboardLayout>,
                    children:[
                        {
                            path: '/dashboard',
                            element:<MyProducts></MyProducts>
                        },
                        {
                            path: '/dashboard/addProducts',
                            element:<AddProducts></AddProducts>
                        },
                        {
                            path: '/dashboard/myOrders',
                            element:<MyOrders></MyOrders>
                        },
                        {
                            path: '/dashboard/allSellers',
                            element:<AllSeller></AllSeller>
                        },
                        {
                            path: '/dashboard/allBuyers',
                            element:<AllBuyers></AllBuyers>
                        },
                    ]
                }
               
                
            ]
        }
       
    ])


export default Routes;