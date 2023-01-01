import { style } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const CatagoriesCard = ({ category }) => {
  const {
    catagoriesCode,
    catagoriesDescription,
    catagoriesIcon,
    catagoriesName,
  } = category;

  return (
    <Link
      to={`/category/${category?._id}`}
      className="relative block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${catagoriesIcon})` }}
    >
      <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
        <h3 class="text-2xl font-bold">{catagoriesName}</h3>

       
      </div>
    </Link>
  );
};

export default CatagoriesCard;
