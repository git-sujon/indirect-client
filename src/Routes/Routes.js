import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import AddProducts from '../Pages/Seller/AddProducts';
import SignUp from '../Pages/SignUp/SignUp';

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
                    path:'/signup',
                    element:<SignUp></SignUp>
                }
            ]
        }
    ])


export default Routes;