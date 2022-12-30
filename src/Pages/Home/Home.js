import React from 'react';
import CatagoriesShowcase from '../Catagories/CatagoriesShowcase/CatagoriesShowcase';
import Advertised from './Advertised/Advertised';
import HomeBanner from './HomeBanner/HomeBanner';
import SubscribeCTA from './SubscribeCTA/SubscribeCTA';
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='container px-5 mx-auto'>
            <CatagoriesShowcase></CatagoriesShowcase>
            <Advertised></Advertised>
            <Testimonials></Testimonials>
            <SubscribeCTA></SubscribeCTA>
          

            </div>
        </div>
    );
};

export default Home;