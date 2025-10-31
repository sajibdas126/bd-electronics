import React from "react";
import {  IoCartOutline } from "react-icons/io5";

export const ProductCard = ({ Product }) => {
  if (!Product) return null;
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-100 hover:shadow-2xl transition-all p-2 h-max">
      <img src={Product.image} className="bg-gray-100 aspect-square" alt="" />
      <h1 className="line-clamp-2 p-1 font-semibold">{Product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${Product.price}</p>
      <button className="flex items-center gap-2 bg-red-500 px-3 py-2 text-lg text-white w-full cursor-pointer justify-center font-semibold rounded-lg "><IoCartOutline className="w-6 h-6"/> Addto Cart</button>
    </div>
  );
};
