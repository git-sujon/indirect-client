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
import Counter from "./Counter/Counter";
// ..

const Home = () => {
  AOS.init();

  return (
    <div>
      <div
        data-aos="slide-down"
        
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <HomeBanner></HomeBanner>
      </div>
      <div
     
     >
     <Counter></Counter>
     </div>

     {/* ............................. */}
     {/* ............................. */}
      {/* ............................. */}
      {/* ............................. */}
      <div className="container px-5 mx-auto">
        {/* <Search></Search> */}
      
        <div
          data-aos="fade-up"
          
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <CatagoriesShowcase></CatagoriesShowcase>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
   data-aos="fade-down"
          
   data-aos-easing="linear"
   data-aos-duration="500"
        >
          <Advertised></Advertised>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
        >
          <AgentHiring></AgentHiring>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
       
        >
          <WhyIndirect></WhyIndirect>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
          data-aos="zoom-in-up"
          
          data-aos-easing="linear"
          data-aos-duration="500"
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
          
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <AboutIndirect></AboutIndirect>
        </div>

        {/* ............................. */}
        {/* ............................. */}

        <div
        className="mb-32"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <SubscribeCTA></SubscribeCTA>
        </div>
      </div>
    </div>
  );
};

export default Home;
