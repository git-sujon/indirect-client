import React from "react";
import "./Banner.css";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = [
    {
      image: 'https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1.jpg',
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: 'https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1.jpg',
      prev: 1,
      id: 2,
      next: 3,
    },
 
    
    {
      image: 'https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1.jpg',
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
