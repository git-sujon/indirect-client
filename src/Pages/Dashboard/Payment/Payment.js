import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import Checkout from "./Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Publishable_key);
const Payment = () => {
  const bookingData = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }

  return (
    <div className=" ">
      <div>
        <div className="my-10">
          <div className="card ">
            <div className="card-body">
              <h2 className="text-3xl font-bold center  ">Order Summery</h2>

              <h2 className="card-title">{bookingData?.productName}</h2>
              <p className="text-gray-900 font-bold">
                Your Name:{" "}
                <span className="text-gray-400 font-semibold">
                  {bookingData.buyerName}
                </span>
              </p>
              <p className="text-gray-900 font-bold">
                Your Email:{" "}
                <span className="text-gray-400 font-semibold">
                  {bookingData.buyerEmail}
                </span>
              </p>

              <p className="text-gray-900 font-bold">
                Property Price:{" "}
                <span className="text-gray-400 font-semibold">
                  {bookingData.productPrice}
                </span>
              </p>

              <p className="text-gray-900 font-bold">
                Property Location:{" "}
                <span className="text-gray-400 font-semibold">
                  {bookingData.propertyLocation}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Order Payment</h2>
          <div className="w-3/5 mx-auto mt-5 ">
            <Elements stripe={stripePromise}>
              <Checkout bookingData={bookingData} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
