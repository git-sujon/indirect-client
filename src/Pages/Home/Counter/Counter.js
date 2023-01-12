import React from "react";
import CountUp from "react-countup";
import {
  BuildingOfficeIcon,
  HomeIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";

const Counter = () => {
  return (
    <div className="text-white bg-[#072f60] ">
      <div className="py-5 px-4 md:px-10 flex gap-y-5 divide-y-2 md:divide-y-0 divide-gray-400 flex-col md:flex-row items-center justify-between">
        {/* part 1  */}
        <div className="flex items-center gap-x-5">
          <div
            data-aos="slide-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <HomeIcon className="w-20"></HomeIcon>
          </div>
          <div
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-6xl font-bold">
              <CountUp start={0} end={4234} delay={3} />+
            </p>
            <p className="text-xs">Homes are already sold</p>
          </div>
        </div>

        {/* part 2  */}
        <div className="flex items-center gap-x-5">
          <div
            data-aos="slide-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <BuildingOfficeIcon className="w-20"></BuildingOfficeIcon>
          </div>
          <div
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-6xl font-bold">
              <CountUp start={0} end={2348} delay={3} />+
            </p>
            <p className="text-xs">Apartments are already sold</p>
          </div>
        </div>

        {/* part 3  */}
        <div className="flex items-center gap-x-5">
          <div
            data-aos="slide-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <HomeModernIcon className="w-20"></HomeModernIcon>
          </div>
          <div
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-6xl font-bold">
              <CountUp start={0} end={3423} delay={1} />+
            </p>
            <p className="text-xs text-justify">
              Office Spaces are already sold
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
