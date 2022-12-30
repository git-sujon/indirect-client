import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import BlogDetails from '../Pages/Blog/BlogDetails/BlogDetails';
import MyOrders from '../Pages/Buyer/MyOrders';
import AllBuyers from '../Pages/Dashboard/AllBuyers/AllBuyers';
import AllProduct from '../Pages/Dashboard/AllProduct/AllProduct';
import AllReports from '../Pages/Dashboard/AllReports/AllReports';
import AllSeller from '../Pages/Dashboard/AllSeller/AllSeller';
import Payment from '../Pages/Dashboard/Payment/Payment';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import AddProducts from '../Pages/Seller/AddProducts';
import MyProducts from '../Pages/Seller/MyProducts';
import Register from '../Register/Register';
import PrivateRoute from './PrivateRoute';

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
                    loader:({params})=> fetch(`http://localhost:5000/catagories/${params.id}`)
                },
                {
                    path:'blog',
                    element:<Blog></Blog>,
                    loader:()=> fetch(`http://localhost:5000/blogs`)
                },
                {
                    path:'blog/:id',
                    element:<BlogDetails></BlogDetails>,
                    loader:({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
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
                    path:'/dashboard',
                    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                    children:[
                        {
                            path: '/dashboard',
                            element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>
                        },
                        {
                            path: '/dashboard/addProducts',
                            element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
                        },
                        {
                            path: '/dashboard/myOrders',
                            element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
                        },
                        {
                            path: '/dashboard/allSellers',
                            element:<PrivateRoute><AllSeller></AllSeller></PrivateRoute>
                        },
                        {
                            path: '/dashboard/allBuyers',
                            element:<PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
                        },
                        {
                            path: '/dashboard/allProducts',
                            element:<PrivateRoute><AllProduct></AllProduct></PrivateRoute>
                        },
                        {
                            path: '/dashboard/allReports',
                            element:<PrivateRoute><AllReports></AllReports></PrivateRoute>
                        },
                        {
                            path: '/dashboard/payment/:id',
                            element:<PrivateRoute><Payment></Payment></PrivateRoute>,
                            loader:({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
                        },
                    ]
                }
               
                
            ]
        }
       
    ])


export default Routes;