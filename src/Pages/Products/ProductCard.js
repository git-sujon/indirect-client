import React from "react";
import { Link } from "react-router-dom";
import {
  CheckBadgeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PhoneIcon,
  QueueListIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import ConfirmationModal from "../Shared/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";

const ProductCard = ({ product, setProduct }) => {
  // console.log(product)

  const {
    _id,
    Property_Name,
    Location,
    productPhoto,
    sellerName,
    Phone_Number,
    Total_Size_Sqr_Feet,
    Selling_Price,
    Original_Price,
    Years_of_Owning,
    Total_Floors_On_Building,
    In_which_floor,
    Total_Bedroom,
    Total_Bath_Room,
    Building_Age,
    Total_Flat,
    Land_Size_Sqr_Feet,
    Kitchen,
    Drawing,
    Dining,
    Lift,
    ServantRoom,
    Gas,
    Garden,
    Solar_Panels,
    InterCom,
    category,
    condition,
    productDescription,

    Timestamp,
    isVerified,
  } = product;

  const reportToButtonHandler = (event) => {
    const reportedProducts = {
      origin_id: _id,
      Property_Name: event.Property_Name,
      Location: event.Location,
      productPhoto: event.productPhoto,
      sellerName: event.sellerName,
      Phone_Number: event.Phone_Number,
      Total_Size_Sqr_Feet: event.Total_Size_Sqr_Feet,
      Selling_Price: event.Selling_Price,
      category: event.category,
      isVerified: event.isVerified,
    };
    fetch(`http://localhost:5000/reportedProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Product is Reported", {
            icon: "❗",
          });
        }
      });
  };

  // console.log(users)

  const dateTime = new Date(Timestamp);
  const dividingTime = dateTime?.toLocaleString()?.split(":");
  const showingTime =
    dividingTime[0] + ":" + dividingTime[1] + " " + dividingTime[2].slice(-2);
  return (
    <div className="block border rounded-lg p-4 shadow-sm shadow-indigo-100">
      <div className="relative overflow-hidden">
        <img
          alt="Home"
          src={productPhoto}
          className="h-56 w-full rounded-md object-cover hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 text-neutral"></CurrencyDollarIcon>
            <p className="text-sm text-gray-500">{Selling_Price}</p>
          </div>

          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 text-neutral"></ClockIcon>
            <p className="text-sm text-gray-500">{showingTime}</p>
          </div>

          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-neutral"></MapPinIcon>
            <p className="text-sm text-gray-500">{Location}</p>
          </div>
        </div>

        <div className="mt-2 h-16">
          <p className="text-xl font-bold">{Property_Name}</p>
        </div>

        {/* .............................. */}
        <div className="mt-4 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <UsersIcon className="h-4 w-4 text-neutral"></UsersIcon>
            <div className="mt-1.5 sm:ml-3 sm:mt-0 flex items-center">
              <p className="font-medium">{sellerName}</p>

              {
                //
                isVerified?.isVerified ? (
                  <CheckBadgeIcon className="h-5 w-5 ml-2 text-blue-500"></CheckBadgeIcon>
                ) : (
                  <CheckBadgeIcon className="h-5 w-5 ml-2 text-red-500"></CheckBadgeIcon>
                )
              }
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <PhoneIcon className="h-4 w-4 text-neutral"></PhoneIcon>
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="font-medium">{Phone_Number}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <QueueListIcon className="h-4 w-4 text-neutral"></QueueListIcon>
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="font-medium">{Total_Bedroom} Bedroom</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <QueueListIcon className="h-4 w-4 text-neutral"></QueueListIcon>
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="font-medium">{Total_Bath_Room} Bathroom</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <QueueListIcon className="h-4 w-4 text-neutral"></QueueListIcon>
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="font-medium">{Total_Size_Sqr_Feet} Sq Feet</p>
            </div>
          </div>
        </div>

        {/* ........................................... */}

        <div className="mt-4 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <QueueListIcon className="h-4 w-4 text-neutral"></QueueListIcon>
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <p className="font-medium">{Years_of_Owning} Years of Own</p>
            </div>
          </div>

          <div className="sm:inline-flex items-center sm:shrink-0 sm:items-center">
            <CurrencyDollarIcon className="h-4 w-4 text-neutral"></CurrencyDollarIcon>

            <p className="font-medium">{Original_Price} Buying Price</p>
          </div>
        </div>
        {/* ....................  */}

        <div className="mt-4 flex  justify-between items-center gap-8 text-sm">
          <div className="flex item-center">
            {/* category  */}
            <div className=" border-2 border-double border-gray-500 p-0.5">
              <p className="mb-0 text-gray-400 ">{category}</p>
            </div>

            {/* report button  */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-ghost btn-xs text-red-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </label>
              <div
                tabIndex={0}
                className="card compact dropdown-content shadow bg-red-100 cursor hover:bg-red-400 cursor-pointer w-20 "
              >
                <div
                  onClick={() => reportToButtonHandler(product)}
                  className="card-body"
                >
                  Report
                </div>
              </div>
            </div>

            {/* wishlist  */}
            <div className="rating rating-sm mt-1 mr-3 ">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-neutral"
              />
            </div>
          </div>

          <div onClick={() => setProduct(product)}>
            <label
              htmlFor="confirmationModal"
              className="btn btn-sm btn-neutral rounded-none "
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
