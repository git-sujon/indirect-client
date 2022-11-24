import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import AddProducts from '../Pages/Seller/AddProducts';
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
                    element:<Products></Products>
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
                }
            ]
        }
    ])


export default Routes;