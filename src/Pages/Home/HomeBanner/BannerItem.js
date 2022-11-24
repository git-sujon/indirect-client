import React from "react";
import Typewriter from 'typewriter-effect';
import NaturalButton from "../../../components/Buttons/NaturalButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

const BannerItem = ({ slider }) => {
  const { image, prev, id, next } = slider;

  return (
    <div id={`slide${id}`} className=" carousel-item relative w-full h-[35rem]">
      <div className="carousel-image-overly h-[35rem]">
        <img  src={image} alt="" className="w-full " />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        <a href={`#slide${prev}`} className="text-5xl text-secondary ">
          ❮
        </a>
        <a href={`#slide${next}`} className="text-5xl text-secondary ">
          ❯
        </a>
      </div>

      <div className="absolute flex  text-white  transform -translate-y-1/2 gap-8 left-24 top-1/4">
        <h1 className="text-6xl font-bold">
          The Best Place  to
          <Typewriter
            options={{
              strings: ["Buy", "Sell", "Rent"], 
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      <div className="absolute flex text-white  transform -translate-y-1/2 gap-8 left-24 bottom-1/3 text-xl w-1/2">
        <p>
        We have the most desired solution for you. With over 1.5 lac+ listings, 2 lacs+ users. Indirect is here with everything you have been looking for with the largest real estate marketing portal in Bangladesh.
        </p>
      </div>

      <div className="absolute flex text-white  transform -translate-y-1/2 gap-8 left-24 top-3/4  ">
        <PrimaryButton>Buyer</PrimaryButton>
      </div>

      <div className="absolute flex text-white  transform -translate-y-1/2 gap-8 left-48 top-3/4  ">
        <NaturalButton>Seller</NaturalButton>
      </div>
    </div>
  );
};

export default BannerItem;
