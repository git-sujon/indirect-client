import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
import Spinner from "../Shared/Spinner/Spinner";
import logo from "../../Resource/Logo/Indirect-accent.png";
import toast from "react-hot-toast";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const { user, userEmailQueryData, emailData, ImageHosting, hostedPhotoUrl } =
    useContext(AuthContext);

  const productInfoWithText = ["Property_Name", "Location"];

  const productInfoWithNumbers = [
    "Total_Size_Sqr_Feet",
    "Selling_Price",
    "Original_Price",
    "Years_of_Owning",
    "Total_Floors_On_Building",
    "In_which_floor",
    "Total_Bedroom",
    "Total_Bath_Room",
    "Total_Balconies",
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

  const propertyCondition = ["Excellent", "GOOD", "Fair", "Poor", "Really Bad"];

  useEffect(() => {
    userEmailQueryData(user?.email);
  }, [user?.email]);

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
    ImageHosting(event.productPhoto[0]);

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
      category: event.category,
      condition: event.condition,
      productDescription: event.productDescription,
      emailData,
      isSold: false,
      isAdvertized: false,
    };

    if (hostedPhotoUrl) {
      fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Product Added");
          }
        });
    }
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
                required
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-secondary focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <p className="text-error"></p>
            </div>
          ))}
        </div>
        {/* .................... */}
        {/* image file and others  */}

        <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
          <div class="file_upload p-5 border-4 border-dotted border-secondary rounded-md">
            <svg
              class="text-neutral  w-16 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div class="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  class="text-sm cursor-pointer  hidden"
                  type="file"
                  {...register("productPhoto")}
                />
                <div class="text bg-neutral text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-secondary">
                  Select Photo
                </div>
              </label>
            </div>
          </div>

          <div>
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
                className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-secondary focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-900"
                htmlFor="username"
              >
                Seller Phone Number
              </label>
              <input
                {...register("Phone_Number")}
                required
                defaultValue={emailData?.name}
                readOnly
                type="text"
                className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-secondary focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
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
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-secondary focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
        {/* Details Description */}
        {/* ..................... */}
        <div className="my-10 w-full  rounded-lg border  dark:bg-secondary ">
          <div className="flex justify-between items-center py-2 px-3 border-b ">
            <div className="flex flex-wrap items-center  sm:divide-x dark:divide-white">
              <div className="flex items-center space-x-1 sm:pr-4">
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-900 rounded cursor-pointer  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="button"
              data-tooltip-target="tooltip-fullscreen"
              className="p-2 text-gray-900 rounded cursor-pointer sm:ml-auto  bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="tooltip-fullscreen"
              role="tooltip"
              className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            >
              Show full screen
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-secondary">
            <label for="editor" className="sr-only">
              Write full Description
            </label>
            <textarea
              id="editor"
              {...register(`productDescription`)}
              rows="8"
              className="block px-5 w-full text-sm text-gray-900 bg-white border-0  focus:ring-0   "
              placeholder="Write full Description..."
              required
            ></textarea>
          </div>
        </div>
        {/* ............................ */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors font-bold duration-300 transform bg-secondary rounded-md hover:bg-secondary "
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProducts;
