import React from "react";
import { Link } from "react-router-dom";

const DisplayBlogPost = ({ posts }) => {

    const {_id, img, question, CATEGORY, ans_p_one , Timestamp} =posts

        const dateTime = new Date(Timestamp);
  const postTime = dateTime?.toLocaleString()?.split(",")[0];
  

 
  return (
    <div>
      <Link to={`/blog/${_id}`} className="overflow-hidden rounded-lg transition drop-shadow-xl border-2">
      <div className="relative overflow-hidden">
        <img
          alt="Office"
          src={img}
          className="h-56 w-full object-cover hover:scale-110 transition duration-300 ease-in-out"
        />
        </div>


        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {postTime}
          </time>

          <Link to={`/blog/${_id}`} >
            <h3 className="my-10 text-lg text-gray-900 h-12">
             {question}
            </h3>
          </Link>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
           {ans_p_one.slice(0,100)}
          </p>
        </div>
      </Link>
    </div>
  );
};


export default DisplayBlogPost;
