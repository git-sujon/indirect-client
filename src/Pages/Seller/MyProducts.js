import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import Spinner from "../Shared/Spinner/Spinner";

const MyProducts = () => {
  // const [products, setProducts] = useState([])
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true)

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const deleteHandler = (product) => {
    console.log(product);
    fetch(`http://localhost:5000/products/${product._id}`, {
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
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({isAdvertized: toggle})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.matchedCount > 0){
            {
                product?.isAdvertized?.isAdvertized ?
                toast.error(`Your AD is Stop`)  : toast.success(`Your AD is Running Now `)  
            }
            setToggle(!toggle)
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
              <tr key={product._id}>
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
                <td className="flex items-center">
                  <button
                    onClick={() => makeAdvertizedHandler(product)}
                    className="btn btn-accent btn-xs"
                  >
                    Advertised{" "}
                  </button>{" "}
                  {
                    product?.isAdvertized?.isAdvertized &&
                    <div
                    className="ml-2 spinner-grow inline-block w-4 h-4 bg-success rounded-full opacity-100"
                    role="status"
                  ></div>
                  }
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
