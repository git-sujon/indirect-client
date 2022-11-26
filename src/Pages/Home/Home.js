import React from 'react';
import CatagoriesShowcase from '../Catagories/CatagoriesShowcase/CatagoriesShowcase';
import HomeBanner from './HomeBanner/HomeBanner';
import SubscribeCTA from './SubscribeCTA/SubscribeCTA';

const Home = () => {
    return (
        <div>
            {/* <HomeBanner></HomeBanner> */}
            <div className='container px-5 mx-auto'>
            <CatagoriesShowcase></CatagoriesShowcase>
            <SubscribeCTA></SubscribeCTA>

            </div>
        </div>
    );
};

export default Home;