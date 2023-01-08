import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const AboutIndirect = () => {
  return (
    <div className="text-center w-4/6 mx-auto my-32">
      <h2 className="text-center text-2xl md:text-4xl font-semibold  mb-12 text-gray-700 animate-fadeIn">
        About Indirect.com
      </h2>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_o8btuiyj.json"
        // style={{ height: "300px", width: "300px" }}
        speed={2}
        className="w-3/6"
      ></Player>
      <p className="text-gray-600 text- font-semibold leading-tight animate-fadeIn text-justify">
        Indirect is a property buying and selling website that focuses on used
        properties. It is a safe platform for both sellers and buyers to share
        their properties. According to recent statistics, Indirect has seen a
        significant increase in the number of used properties being listed on
        the site. In the past year alone, the number of listings has increased
        by 25%. <span className="hidden md:inline">
        This trend is expected to continue as more and more people turn
        to Indirect to sell their used properties. One of the reasons for this
        increase is the fact that Indirect is a safe place for both sellers and
        buyers. Sellers can be confident that they will receive a fair price for
        their property, while buyers can be assured that they are getting a good
        deal. In addition, Indirect has a number of safeguards in place to
        protect both parties from fraud and other forms of misconduct. Another
        factor contributing to the success of Indirect is its focus on used
        properties. As more people become environmentally conscious, there is a
        growing demand for sustainable options such as used properties. Indirect
        is able to meet this demand by providing a platform for the buying and
        selling of used properties. Overall, Indirect is a great resource for
        anyone looking to buy or sell a used property. With its focus on safety
        and sustainability, it is the go-to site for anyone looking to make a
        property transaction.
        </span>
      </p>
    </div>
  );
};

export default AboutIndirect;
