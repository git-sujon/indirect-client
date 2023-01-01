import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const Search = () => {
    const propertyType = [""]
    const minPrice = ["2 Lakh", "5 Lakh", "1.5 Million", "2 Million", "3 Million","5 Million","10 Million",]
    const maxPrice = ["2 Lakh", "5 Lakh", "1.5 Million", "2 Million", "3 Million","5 Million","10 Million",]
    const beds = ["Single Bed", "Dabble Beds", "3 Beds", "4 Beds", "5 Beds", "6 Beds",]


  return (
    <div className="flex bg-gray-100 items-center justify-center my-32 lg:w-4/6 mx-auto">
      <div className="p-5 ">
        <div>
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              className="border-2 border-gray-700 py-1 pl-8  w-full"
              name="input-search"
              id=""
              placeholder="City"
            />
            <input
              type="button"
              className="btn btn-primary btn-sm ml-2 py-1 text-white"
              value="Search"
            />
            <span className="pointer-events-none absolute inset-y-0 left-0 grid w-10 place-content-center text-gray-500">
              <MagnifyingGlassIcon className="w-5 h-5"></MagnifyingGlassIcon>
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-x-5 justify-center">
            {/* property categories  */}
            <div>
                <select name="" className="p-2" id="">
                    <option value="Property-Type" >Property Type</option>
                    <option value="Home">Home</option>
                </select>
            </div>
            {/* Min price  */}
            <div>
                <select name="" className="p-2" id="">
                    <option value="">Min Price</option>
                    {
                        minPrice.map((price, idx) =>  <option key={idx} value={price}>{price}</option> )
                    }
                </select>
            </div>
            {/* max-price  */}
            <div>
                <select name="" className="p-2" id="">
                    <option value="">Max Price</option>
                    {
                        minPrice.map((price, idx) =>  <option key={idx} value={price}>{price}</option> )
                    }
                </select>
            </div>
            {/* Beds  */}
            <div>
                <select name="" className="p-2" id="">
                   
                    {
                        beds.map((price, idx) =>  <option key={idx} value={price}>{price}</option> )
                    }
                </select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
