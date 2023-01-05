import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";

import ProductCard from "../../Products/ProductCard";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  Mousewheel,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Advertised = () => {
  // product?.isAdvertized?.isAdvertized

  const [product, setProduct] = useState();
  const [booking, setBooking] = useState(null);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`https://server-git-sujon.vercel.app/products`);
      const data = await res.json();
      return data;
    },
  });
  //   const [advertProduct, setAdvertProduct] = useState({})
  let advertProducts = [];
  products.forEach((product) => {
    if (product?.isAdvertized?.isAdvertized) {
      return advertProducts.push(product);
    }
    return advertProducts;
  });

  //   console.log(products);

  return (
    <div className="my-32">
      {advertProducts.length ? (
        <div>
          <h2 className="text-center text-4xl font-semibold uppercase mb-32 text-gray-700">
            Advertise Products
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
          
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          >
            {advertProducts?.map((product) => (
              <SwiperSlide>
                <ProductCard
                  key={product?._id}
                  product={product}
                  setProduct={setProduct}
                ></ProductCard>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
          {!booking && (
            <ConfirmationModal
              product={product}
              setBooking={setBooking}
            ></ConfirmationModal>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Advertised;
