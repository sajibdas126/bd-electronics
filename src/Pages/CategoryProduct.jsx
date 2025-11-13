import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import { ProductListView } from "../Components/ProductListView";
// import ProductListView from "../components/ProductListView"; // যদি ব্যবহার করো

export const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]); // ✅ Default empty array
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate()

  const getFilterData = async () => {
    try {
      //  API endpoint
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      // res.data  array
      setSearchData(res.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilterData();
  }, [category]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-[400px]">
          <video autoPlay loop muted className="h-24 w-24">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      ) : searchData?.length > 0 ? ( //  optional chaining
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button onClick={()=>navigate('/')} className="bg-gray-800 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1">
            <ChevronLeft /> Back
          </button>

          <div className="grid gap-6 mt-6">
            {searchData.map((product, index) => (
              <ProductListView key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <p className="text-gray-500">No products found</p>
        </div>
      )}
    </div>
  );
};
