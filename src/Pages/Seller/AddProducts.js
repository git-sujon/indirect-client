import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
import Spinner from "../Shared/Spinner/Spinner";
import logo from '../../Resource/Logo/Indirect-accent.png'
import toast from "react-hot-toast";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { user, userEmailQueryData, emailData , ImageHosting, hostedPhotoUrl} = useContext(AuthContext);


  const productInfoWithText = ["Property_Name", "Location"];

  const productInfoWithNumbers = [
    "Phone_Number",
    "Total_Size_Sqr_Feet",
    "Selling_Price",
    "Original_Price",
    "Years_of_Owning",
    "Total_Floors_On_Building",
    "In_which_floor",
    "Total_Bedroom",
    "Total_Bath_Room",
    "Building_Age",
    "Total_Flat",
    "Land_Size_Sqr_Feet",
  ];

  const productInfoWithCheck = [
    "Kitchen",
    "Drawing",
    "Dining",
    "Lift",
    "ServantRoom",
    "Gas",
    "Garden",
    "Solar_Panels",
    "InterCom",
  ];

  const propertyCondition = ["Excellent" ,"GOOD", "Fair", "Poor", "Really Bad"]

  useEffect(()=> {
    userEmailQueryData(user?.email)
  }, [user?.email])

  const { data: catagories = [], isLoading } = useQuery({
    queryKey: ["catagories"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/catagories`);
      const data = await res.json();
      return data;
    },
  });
  if (!user && isLoading && !emailData) {
    return <Spinner></Spinner>;
  }
  
  const addProductsHandler = (event) => {

    ImageHosting(event.productPhoto[0])

    const productInfo = {
      Property_Name: event.Property_Name,
      Location: event.Location,
      productPhoto: hostedPhotoUrl,
      sellerName: event.sellerName,
      Phone_Number: event.Phone_Number,
      Total_Size_Sqr_Feet: event.Total_Size_Sqr_Feet,
      Selling_Price: event.Selling_Price,
      Original_Price: event.Original_Price,
      Years_of_Owning: event.Years_of_Owning,
      Total_Floors_On_Building: event.Total_Floors_On_Building,
      In_which_floor: event.In_which_floor,
      Total_Bedroom: event.Total_Bedroom,
      Total_Bath_Room: event.Total_Bath_Room,
      Building_Age: event.Building_Age,
      Total_Flat: event.Total_Flat,
      Land_Size_Sqr_Feet: event.Land_Size_Sqr_Feet,
      Kitchen: event.Kitchen,
      Drawing: event.Drawing,
      Dining: event.Dining,
      Lift: event.Lift,
      ServantRoom: event.ServantRoom,
      Gas: event.Gas,
      Garden: event.Garden,
      Solar_Panels: event.Solar_Panels,
      InterCom: event.InterCom,
      category:event.category,
      condition: event.condition,
      emailData,
    };

    fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(productInfo)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            toast.success("Product Added")
        }
    })
    
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md my-10">
        <div>
            <img className="w-32" src={logo} alt="" />
        </div>
      <h2 className="text-5xl font-semibold text-gray-700 capitalize mb-10  text-center">
        Add Product
      </h2>

      <form onSubmit={handleSubmit(addProductsHandler)}>
        <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
          {/* ................. TEXT BASED  */}
          {productInfoWithText.map((name, idx) => (
            <div key={idx}>
              <label
                className="text-gray-700 dark:text-gray-900"
                htmlFor="username"
              >
                {name}
              </label>
              <input
                {...register(`${name}`)}
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <p className="text-error"></p>
            </div>
          ))}
        </div>
        {/* .................... */}
        {/* image file and others  */}

        <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-900"
              htmlFor="username"
            >
              Property Photo
            </label>
            <input
              {...register("productPhoto", {
                required: "THis Field is required",
              })}
              type="file"
              className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-900"
              htmlFor="username"
            >
              Seller Name
            </label>
            <input
              {...register("sellerName")}
              required
              defaultValue={emailData?.name}
              readOnly
              type="text"
              className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        {/* ................. */}
        {/* ................. Number BASED  */}
        <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-4">
          {productInfoWithNumbers.map((name, idx) => (
            <div key={idx}>
              <label
                className="text-gray-700 dark:text-gray-900"
                htmlFor="username"
              >
                {name}
              </label>
              <input
                {...register(`${name}`)}
                type="number"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          ))}
        </div>
        {/* .................... */}

        {/* ................. Option BASED Product Condition  */}
        <div className="my-5 flex justify-between items-center">
          <label
            className="text-gray-700 dark:text-gray-900  "
            htmlFor="username"
          >
            Select Property Overall Condition
          </label>
          <select
            {...register(`condition`)}
            className="select select-success w-full max-w-xs"
          >
            {propertyCondition?.map((condition, idx) => (
              <option key={idx} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        {/* .................  */}
        {/* ................. Option BASED Product catagories */}
        <div className="my-5 flex justify-between items-center">
          <label
            className="text-gray-700 dark:text-gray-900 "
            htmlFor="username"
          >
            Select Product Category
          </label>
          <select
            {...register(`category`)}
            className="select select-success w-full max-w-xs"
          >
            {catagories?.map((category) => (
              <option key={category._id} value={category.catagoriesName}>
                {category?.catagoriesName}
              </option>
            ))}
          </select>
        </div>
        {/* .................  */}
        {/* ................. Check BASED  */}
        <div className="flex flex-wrap gap-4 mt-5">
          {productInfoWithCheck.map((name, idx) => (
            <div
              className="flex justify-between border p-2 bg-secondary rounded-md "
              key={idx}
            >
              <label className="text-white font-semibold" htmlFor="username">
                {name}
              </label>
              <input
                {...register(`${name}`)}
                type="checkbox"
                className="checkbox  checkbox-neutral ml-3 border-white"
              />
            </div>
          ))}
        </div>
        {/* .................... */}

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-neutral rounded-md hover:bg-secondary "
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProducts;
