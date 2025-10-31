import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/");
      const products = res.data;
      const productsData = res.data.products;
      setData(productsData);

      // Fakestore API তে মোট ২০টা প্রডাক্ট আছে, তাই আমরা ১৫০টা বানাচ্ছি
      const expanded = [];
      while (expanded.length < 150) {
        const randomProduct =
          products[Math.floor(Math.random() * products.length)];
        expanded.push({
          ...randomProduct,
          id: expanded.length + 1, // নতুন id দিচ্ছি
        });
      }

      setData(expanded);
      console.log("✅ 150 products loaded successfully:", expanded);
    } catch (error) {
      console.log("❌ Error fetching products:", error);
    }
  };

  // catogary

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(
    data,
    fetchAllProducts,
    categoryOnlyData
  );

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
