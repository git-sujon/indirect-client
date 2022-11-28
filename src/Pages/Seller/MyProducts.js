import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import Spinner from "../Shared/Spinner/Spinner";

const MyProducts = () => {
  // const [products, setProducts] = useState([])
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://server-git-sujon.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const deleteHandler = (product) => {
    console.log(product);
    fetch(`https://server-git-sujon.vercel.app/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`${product.Property_Name} is Deleted`);
        refetch();
      });
  };

  const makeAdvertizedHandler = (product) => {
    fetch(`https://server-git-sujon.vercel.app/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isAdvertized: toggle }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          {
            product?.isAdvertized?.isAdvertized
              ? toast.error(`Your AD is Stop`)
              : toast.success(`Your AD is Running Now `);
          }
          setToggle(!toggle);
          refetch();
        }
      });
  };

  if (isLoading) {
    <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="bg-neutral">
            <tr>
              <th>Property</th>
              <th>Available</th>
              <th>Price</th>
              <th>Advertize</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {products.map((product) => (
              <tr className="" key={product._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.productPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.Property_Name}</div>
                      <div className="text-sm opacity-50">
                        {product.Location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-neutral text-sm font-semibold">
                    {product.isSold ? "Sold" : "Available"}
                  </p>
                </td>
                <td className="text-neutral text-sm font-semibold">
                  ${product?.Selling_Price}
                </td>
                <td className="flex  relative ">
                  <button
                    onClick={() => makeAdvertizedHandler(product)}
                    className="btn btn-accent btn-xs "
                  >
                    Advertised{" "}
                  </button>{" "}
                  {product?.isAdvertized?.isAdvertized && (
                    <div className="">
                      <span class="absolute top-4 right-[-2px]  flex  h-8 w-8">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex h-5 w-5 rounded-full bg-green-500"></span>
                      </span>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(product)}
                    className="btn btn-warning btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
