import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import BlogDetails from '../Pages/Blog/BlogDetails/BlogDetails';
import MyOrders from '../Pages/Buyer/MyOrders';
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
                    path:'/addProducts',
                    element:<AddProducts></AddProducts>
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
                    path:'/myProducts',
                    element:<MyProducts></MyProducts>
                },
                {
                    path: '/myOrders',
                    element:<MyOrders></MyOrders>,
                },
                {
                    path: '/payment/:id',
                    element:<Payment></Payment>,
                    loader:({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
                }
            ]
        }
    ])


export default Routes;