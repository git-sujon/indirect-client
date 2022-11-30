import React from "react";
import "./Banner.css";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      prev: 1,
      id: 2,
      next: 3,
    },
    
    
    {
      image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      prev: 2,
      id: 3,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full ">
 
        {
            bannerData.map(slider => <BannerItem key={slider.id} slider={slider}></BannerItem>)
        }

    </div>
  );
};

export default Banner;
