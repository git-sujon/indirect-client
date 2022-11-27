import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import ProductCard from "../../Products/ProductCard";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const Advertised = () => {
  // product?.isAdvertized?.isAdvertized

  const [product, setProduct] = useState()
  const [booking, setBooking] = useState(null)

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      return data;
    },
  });
  //   const [advertProduct, setAdvertProduct] = useState({})
  let advertProducts = [];
  products.forEach((product) => {
    if (product?.isAdvertized?.isAdvertized) {
      console.log(product);
      return advertProducts.push(product);
    }
    return advertProducts;
  });
  console.log(advertProducts);

  //   console.log(products);

  return (
    <div className="my-20">
    {   
    advertProducts &&
          <div>
          <h2 className="text-center text-4xl font-semibold uppercase mb-10">
            Advertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advertProducts?.map((product) => (
              <ProductCard key={product?._id} product={product} setProduct= {setProduct}></ProductCard>
            ))}
          </div>
          {
            !booking && <ConfirmationModal product={product} setBooking={setBooking}></ConfirmationModal>
           }
           
        </div>
    }
    </div>
  );
};

export default Advertised;
