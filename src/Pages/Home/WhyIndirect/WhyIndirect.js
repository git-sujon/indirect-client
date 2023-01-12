import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
const WhyIndirect = () => {
  return (
    <section class="overflow-hidden sm:grid sm:grid-cols-2 pt-32">
      <div
      className="hidden md:block"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img alt="Student" src="https://i.ibb.co/Br6Tr6g/960x0.jpg" />
      </div>

      <div
        class=" pl-8 pb-8 md:pb-0"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div class="mx-auto max-w-xl  mt-5 md:mt-0">
          <h2 class="text-3xl font-bold text-gray-900 md:text-6xl text-center md:text-left">
            Home Buying And Selling Journey with Indirect
          </h2>

          <div class="text-gray-600 mt-4 ">
            <ul>
              <p className="flex items-center gap-x-3 mt-1">
                <ShieldCheckIcon className="w-8 text-green-500"></ShieldCheckIcon>{" "}
                Marketing and advertising support to promote your property
              </p>
              <p className="flex items-center gap-x-3 mt-1">
                <ShieldCheckIcon className="w-8 text-green-500"></ShieldCheckIcon>{" "}
                Wide network of connections and resources
              </p>
              <p className="flex items-center gap-x-3 mt-1">
                <ShieldCheckIcon className="w-8 text-green-500"></ShieldCheckIcon>{" "}
                Streamlined process for a smooth and stress-free experience
              </p>
              <p className="flex items-center gap-x-3 mt-1">
                <ShieldCheckIcon className="w-8 text-green-500"></ShieldCheckIcon>{" "}
                Customized solutions to meet your specific needs and goals
              </p>
              <p className="flex items-center gap-x-3 mt-1">
                <ShieldCheckIcon className="w-8 text-green-500"></ShieldCheckIcon>{" "}
                Ongoing support and communication throughout the buying or
                selling journey
              </p>
              <p className="flex items-center gap-x-3 mt-1">
                <ShieldCheckIcon className="w-8 text-green-500"></ShieldCheckIcon>{" "}
                Marketing and advertising support to promote your property
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div
      className="md:hidden"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img alt="Student" src="https://i.ibb.co/Br6Tr6g/960x0.jpg" />
      </div>


    </section>
  );
};

export default WhyIndirect;
