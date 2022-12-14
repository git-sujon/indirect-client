import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import logo from "../../../Resource/Logo/Indirect-white.png";
import Spinner from "../Spinner/Spinner";

const Navbar = () => {
  // const [catagories, setCatagories] = useState([]);
  const {user,logOut}= useContext(AuthContext)


  const logoutHandler = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

 

  const {data:catagories = [] , isLoading} = useQuery({
    queryKey:['catagories'],
    queryFn: ()=>{
      const data = axios.get(`https://server-git-sujon.vercel.app/catagories`)
      return data
    }
  })
  if(isLoading){
    return <Spinner></Spinner>
  }
 

  const menus = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li className="bg-primary " tabIndex={1}>
        <Link className="bg-primary justify-between">
          Catagories
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className=" bg-primary p-2 " style={{zIndex:"1000"}}>
          {catagories?.data?.map((category) => (
            <li key={category?._id}>
              <Link to={`/category/${category?._id}`}>{category?.catagoriesName}</Link>
            </li>
          ))}
        </ul>
      </li>

     
   
     
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      
    </>
  );

  return (
 
      <div className="navbar bg-primary text-white font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={3}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {/* mobile menus */}

              {menus}
            </ul>
          </div>
          <Link to="/">
            <img className="w-44" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {/* desktop menus  */}
            {menus}
          </ul>

        </div>
        <div className="navbar-end">
         {
          user?.email ?

           <button onClick={logoutHandler} className="btn text-white">Logout</button>
           :
           <Link to='/login' className="btn text-white">Login</Link>
         }
        </div>


        <label   htmlFor="dashboardOpen" tabIndex={5} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
      </div>

    

  );
};

export default Navbar;
