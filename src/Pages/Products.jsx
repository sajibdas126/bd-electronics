import React, { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import { FilterSection } from "../Components/FilterSection";
import Loading from "../assets/Loading4.webm";
import { ProductCard } from "../Components/ProductCard";

function Products() {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              handleBrandChange={ handleBrandChange}
              handleCategoryChange={ handleCategoryChange}
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 ">
              {filterData?.map((Product, index) => {
                return <ProductCard key={index} Product={Product} />;
              })}
            </div>
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
