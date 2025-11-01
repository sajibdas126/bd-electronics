import React from "react";
import { getData } from "../Context/DataContext";
import { Search } from "lucide-react";

export const FilterSection = ({
  setSearch,
  brand,
  priceRange,
  setPriceRange,
  category,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 mt-10 w-full md:w-72 border border-gray-100">
      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Section */}
      <h2 className="mt-6 mb-3 font-semibold text-lg text-gray-800 border-b pb-1">
        Category
      </h2>
      <div className="flex flex-col gap-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {categoryOnlyData?.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded cursor-pointer"
          >
            <input
              type="radio"
              name={category}
              checked={category === item}
              value={item}
              onChange={handleCategoryChange}
              className="accent-blue-600 w-4 h-4"
            />
            <span className="uppercase text-gray-700 text-sm">{item}</span>
          </label>
        ))}
      </div>

      {/* Brand Section */}
      <h2 className="mt-6 mb-3 font-semibold text-lg text-gray-800 border-b pb-1">
        Brand
      </h2>
      <select
        value={brand}
        onChange={handleBrandChange}
        className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      >
        {brandOnlyData && brandOnlyData.length > 0 ? (
          brandOnlyData.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))
        ) : (
          <option disabled>Loading...</option>
        )}
      </select>
      {/* price range */}
      <h2 className="mt-6 mb-3 font-semibold text-lg text-gray-800 border-b pb-1">
        Price Range
      </h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-sm">
          Price Renge: ${priceRange[0]} - ${priceRange[1]}{" "}
        </label>
        <input
          type="range"
          name=""
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      <button className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer">
        Reset Filters
      </button>
    </div>
  );
};
