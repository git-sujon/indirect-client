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


const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div className="container px-5 mx-auto">
        {/* <Search></Search> */}
        <CatagoriesShowcase></CatagoriesShowcase>
       
        <Advertised></Advertised>
        <AgentHiring></AgentHiring>
        <WhyIndirect></WhyIndirect>
        <Testimonials></Testimonials>
        <HowWeWork></HowWeWork>
        <AboutIndirect></AboutIndirect>
        <SubscribeCTA></SubscribeCTA>
      
      </div>
    </div>
  );
};

export default Home;
