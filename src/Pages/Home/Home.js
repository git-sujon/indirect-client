import React from "react";
import CatagoriesShowcase from "../Catagories/CatagoriesShowcase/CatagoriesShowcase";
import AboutIndirect from "./AboutIndirect/AboutIndirect";
import Advertised from "./Advertised/Advertised";
import AgentHiring from "./AgentHiring/AgentHiring";
import HomeBanner from "./HomeBanner/HomeBanner";
import HowWeWork from "./HowWeWork/HowWeWork";
import Search from "./Search/Search";
import SubscribeCTA from "./SubscribeCTA/SubscribeCTA";
import Testimonials from "./Testimonials/Testimonials";
import WhyIndirect from "./WhyIndirect/WhyIndirect";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Home = () => {
  AOS.init();

  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <HomeBanner></HomeBanner>
      </div>
      {/* ............................. */}
      {/* ............................. */}
      <div className="container px-5 mx-auto">
        {/* <Search></Search> */}
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <CatagoriesShowcase></CatagoriesShowcase>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Advertised></Advertised>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <AgentHiring></AgentHiring>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <WhyIndirect></WhyIndirect>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Testimonials></Testimonials>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        {/* <HowWeWork></HowWeWork> */}

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="zoom-out-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <AboutIndirect></AboutIndirect>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SubscribeCTA></SubscribeCTA>
        </div>
      </div>
    </div>
  );
};

export default Home;
