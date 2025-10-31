import React from "react";
import { getData } from "../Context/DataContext";

export const FilterSection = () => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max ">
      <input
        type="text"
        placeholder="Search"
        className="bg-white p-2 rounded-md border-gray-400 border-2"
      />
      {/* Catogory only data */}
      <h1 className="mt-5 font-semibold text-xl ">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((title, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input type="checkbox" />
              <button className="cursor-pointer uppercase">{title}</button>
            </div>
          );
        })}
      </div>
      {/* brand only data */}
        <h1 className="mt-5 font-semibold text-xl ">Barnd</h1>
      <div className="flex flex-col gap-2 mt-3">
        {brandOnlyData?.map((title, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input type="checkbox" />
              <button className="cursor-pointer uppercase">{title}</button>
            </div>
          );
        })}
      </div>


    </div>
  );
};
