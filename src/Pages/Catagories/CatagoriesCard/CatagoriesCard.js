import React from "react";
import { Link } from "react-router-dom";

const CatagoriesCard = ({category}) => {

    const {catagoriesCode,catagoriesDescription, catagoriesIcon, catagoriesName } = category

  return (
    <Link to={`/category/${category?._id}`}>
      <div class="rounded-xl bg-gradient-to-r text-center from-green-300 via-blue-500 to-primary p-0.5 shadow-xl transition hover:shadow-sm">
        <div class="rounded-[10px] bg-white p-4 !pt-10 sm:p-6">
     
        <div>
            <img className="w-28 mx-auto" src={catagoriesIcon} alt="" />
        </div>
        <div>
            <h3 className="text-3xl font-semibold text-neutral">{catagoriesName}</h3>
            {/* <p className="text-">{catagoriesDescription}</p> */}
        </div>
         

        </div>
      </div>
    </Link>
  );
};

export default CatagoriesCard;
