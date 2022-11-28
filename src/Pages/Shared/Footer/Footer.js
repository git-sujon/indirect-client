import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../Resource/Logo/Indirect-accent.png'


const Footer = () => {

  const [catagories , setCatagories] =useState([])


  useEffect(() => {
    fetch(`https://server-git-sujon.vercel.app/catagories/`)
    .then(res=> res.json())
    .then((data) => {
      setCatagories(data);
    });
  }, []);

    return (
        <div>
                <footer className="footer p-10 bg-special text-accent">
  <div>
   <img className='w-64' src={logo} alt="" />
    <p className='max-w-sm'>Indirect is Buying and Selling Property website, We only focusing now on used property. This is the safest place for Sellers and Buyers to share their property.</p>
  </div> 
  <div>
    <span className="footer-title">Catagories</span> 
    {
      catagories.map(category => <Link to={`/category/${category?._id}`} key={category?._id} className="link link-hover">{category?.catagoriesName}</Link>)
    } 

  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;