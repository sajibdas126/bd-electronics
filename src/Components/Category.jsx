import React, { useEffect } from "react";

import { getData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const {   categoryOnlyData } = getData();
  const navigate = useNavigate()
  return (
    <div>
      <div className="">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center justify-center sm:justify-around py-5 px-3 sm:px-6">
          {categoryOnlyData?.map((item, index) => {
            return (
              <div key={item}>
                <button onClick={()=>navigate(`/category/${item}`)} className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white text-sm sm:text-base sm:px-4 px-3 py-1.5 sm-py-2 rounded-md cursor-pointer">
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
