import React, { useEffect } from "react";
import { getData } from "../Context/DataContext";
import { FilterSection } from "../Components/FilterSection";
import Loading from "../assets/Loading4.webm";
import { ProductCard } from "../Components/ProductCard";

function Products() {
  const { data, fetchAllProducts } = getData();
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection></FilterSection>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 ">
              {
              data?.map ((Product,index)=>{
                return <ProductCard key={index} Product={Product}/>
              })
              }</div>
          </div>
        ) : (
          <div className=" flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm"></source>
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
