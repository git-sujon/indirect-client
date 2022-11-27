
import React from "react";
import Lottie from 'react-lottie';
import { Link, useRouteError } from "react-router-dom";
import Error404Animation from '../../Resource/Anmation/98642-error-404.json'

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error.message);
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Error404Animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };


  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div>
        {/* {Error404Animation} */}
        <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>

      </div>
      <div className="text-center">
        

        <p className="mt-4 text-gray-500">{error.message}</p>

        <Link
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
