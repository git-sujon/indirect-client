import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ConfirmationModal = ({ product, setBooking }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const confirmationModalHandler = (event) => {
    
    const booking = {
        buyerName:user?.displayName,
        buyerEmail: user?.email,
        buyerPhone:event.buyerPhone,
        buyerLocation: event.buyerLocation,
        productName: product.Property_Name,
        productPrice: product.Selling_Price,
        productPhoto: product.productPhoto,
        productId: product._id,
        sellerName: product.sellerName,
        Phone_Number: product.Phone_Number,
        productCategory: product.category,
        Total_Size_Sqr_Feet: product.Total_Size_Sqr_Feet,
        propertyLocation: product.Location,
        
    };

    fetch(`https://server-git-sujon.vercel.app/bookings`,{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.acknowledged){
            toast.success("Booking Done")
            setBooking(booking)
            navigate('/dashboard/myOrders')
        }
    })


    console.log(booking)

  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="confirmationModal"
        className="modal-toggle  bg-white bg-opacity-25 "
      />
      <div className="modal rounded-none">
        <div className="modal-box relative rounded-none">
          <label
            htmlFor="confirmationModal"
            className="btn btn-sm btn-circle btn-neutral absolute right-2 top-2"
          >
            ✕
          </label>
          {/* .................................................. */}

          <div className="grid ">
            <h1 className="text-center text-2xl text-neutral font-semibold uppercase mb-3">
              Booking Now
            </h1>
            <div className=" p-x-12 bg-white mt-2">
              <div className="text-sm">
                <p>
                  {" "}
                  <span className="font-semibold">
                    &raquo; Property Name:
                  </span>{" "}
                  {product?.Property_Name}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">
                    &raquo; Property Price:
                  </span>{" "}
                  ${product?.Selling_Price}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">
                    &raquo; Seller Name:
                  </span>{" "}
                  {product?.sellerName}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">
                    &raquo; Seller Phone:
                  </span>{" "}
                  {product?.Phone_Number}
                </p>
              </div>
              <form
                className="mt-6"
                onSubmit={handleSubmit(confirmationModalHandler)}
              >
                <div className="flex justify-between gap-3">
                  <span className="w-1/2">
                    <label
                      htmlFor="firstname"
                      className="flex items-center mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      <UserIcon className="w-5 mr-2"></UserIcon>Your Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      {...register("buyerName")}
                      defaultValue={user?.displayName}
                      readOnly
                      disabled
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </span>
                  <span className="w-1/2">
                    <label
                      htmlFor="lastname"
                      className="flex items-center mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      <PhoneIcon className="w-5 mr-2"></PhoneIcon> Your Phone
                    </label>
                    <input
                      id="lastname"
                      type="phone"
                      {...register("buyerPhone")}
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </span>
                </div>
                <label
                  htmlFor="email"
                  className="flex items-center mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  <EnvelopeIcon className="w-5 mr-2"></EnvelopeIcon> Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  disabled
                  {...register("buyerEmail")}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />

                <label
                  htmlFor="text"
                  className=" mt-2 text-xs font-semibold text-gray-600 uppercase flex items-center"
                >
                  <MapPinIcon className="w-5 mr-2"></MapPinIcon> Metring
                  Location
                </label>
                <input
                  id="text"
                  type="text"
                  {...register("buyerLocation")}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-neutral shadow-lg focus:outline-none hover:bg-secondary hover:shadow-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* .................................................. */}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
