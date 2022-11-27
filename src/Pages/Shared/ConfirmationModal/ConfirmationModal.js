import React from "react";
import { useForm } from "react-hook-form";
import {
    CheckBadgeIcon,
    ClockIcon,
    CurrencyDollarIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    QueueListIcon,
    UserIcon,
    UsersIcon,
  } from "@heroicons/react/24/solid";

const ConfirmationModal = ({product}) => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();

      const confirmationModalHandler = (event) => {
      console.log(event)

      }



  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmationModal" className="modal-toggle  bg-white bg-opacity-25 " />
      <div className="modal rounded-none">
        <div className="modal-box relative rounded-none">
          <label
            htmlFor="confirmationModal"
            className="btn btn-sm btn-circle btn-neutral absolute right-2 top-2"
          >
            ✕
          </label>
{/* .................................................. */}


<div class="grid ">
    <h1 className="text-center text-2xl text-neutral font-semibold uppercase mb-3">Book Now</h1>
  <div class=" p-x-12 bg-white mt-2">
    <div className="text-sm">
    <p> <span className="font-semibold">&raquo; Property Name:</span> {product?.Property_Name}</p>
    <p> <span className="font-semibold">&raquo; Property Price:</span> ${product?.Selling_Price}</p>
    <p> <span className="font-semibold">&raquo; Seller Name:</span> {product?.sellerName}</p>
    <p> <span className="font-semibold">&raquo; Seller Phone:</span> {product?.Phone_Number}</p>

    </div>
    <form class="mt-6" onSubmit={handleSubmit(confirmationModalHandler)}>
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label for="firstname" class="flex items-center mt-2 text-xs font-semibold text-gray-600 uppercase"><UserIcon className="w-5 mr-2"></UserIcon>Your Name</label>
          <input id="firstname" type="text"{...register("buyerName", )}   class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span class="w-1/2">
          <label for="lastname" class="flex items-center mt-2 text-xs font-semibold text-gray-600 uppercase"><PhoneIcon className="w-5 mr-2"></PhoneIcon> Your Phone</label>
        <input id="lastname" type="phone" {...register("buyerPhone")} class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <label for="email"  class="flex items-center mt-2 text-xs font-semibold text-gray-600 uppercase"><EnvelopeIcon className="w-5 mr-2"></EnvelopeIcon> Your Email</label>
      <input id="email" type="email" {...register("buyerEmail")}   class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

      <label for="text"  class=" mt-2 text-xs font-semibold text-gray-600 uppercase flex items-center"><MapPinIcon className="w-5 mr-2"></MapPinIcon> Metring Location</label>
      <input id="text" type="email" {...register("buyerLocation")}  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />


      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-neutral shadow-lg focus:outline-none hover:bg-secondary hover:shadow-none">
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
