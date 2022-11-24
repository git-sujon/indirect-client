import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Resource/Logo/Indirect-white.png";

const Navbar = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/catagories/`).then((data) => {
      console.log(data);
      setCatagories(data.data);
    });
  }, []);

  const menus = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li className="relative bg-primary " tabIndex={1}>
        <Link className="bg-primary justify-between">
          Parent
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
        <ul className=" bg-primary p-2 ">
          {catagories?.map((category) => (
            <li>
              <Link to={`/category/${category._id}`}>{category?.catagoriesName}</Link>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <Link to="/addProducts">Add Products</Link>
      </li>
      <li>
        <Link to="">Blog</Link>
      </li>
      <li>
        <Link to="">FAQ</Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-primary text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
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
          <Link to='/signup' className="btn text-white">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
