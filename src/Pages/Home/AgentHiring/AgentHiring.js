import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const AgentHiring = () => {
  return (
    <section class="overflow-hidden sm:grid sm:grid-cols-2 pt-32">
      <div class=" pr-8 pb-8 md:pb-0"
       data-aos="fade-down"
       data-aos-offset="300"
       data-aos-easing="linear"
       data-aos-duration="500"
      >
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-3xl font-bold text-gray-900 md:text-6xl">
          Our Agent Can Help You to Find the Best House
          </h2>

          <p class=" text-gray-600 md:mt-4 ">
          Allow our skilled agent to assist you in your search for the perfect home. With their expertise and dedication to finding the best fit for you and your family, you can trust that you will be guided towards the house of your dreams. Don't waste any more time scouring listings on your own, let our agent handle the hard work and help you find the best house on the market.
          </p>

          <div class="mt-4 md:mt-8">
            <Link
              href="#"
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Find a Agent
            </Link>
          </div>
        </div>
      </div>

      <div 
       data-aos="fade-up"
       data-aos-offset="300"
       data-aos-easing="linear"
       data-aos-duration="500"

      >
      <img
        alt="Student"
        src="https://i.ibb.co/dfCvzY4/Easter-Buyshutterstock-1156208527.jpg"
      />
      </div>
    </section>
  );
};

export default AgentHiring;
