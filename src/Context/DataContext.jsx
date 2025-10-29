import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching all products from API
  const fatchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
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

  return (
    <DataContext.Provider value={{ data, setData, fatchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

// import { createContext, useState, useEffect } from "react";
// import electronics from "../Electronics.json";

// export const DataContext = createContext(null);

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   const fatchAllProducts = () => {
//     const products = electronics;

//     const expanded = [];
//     while (expanded.length <= 150) {
//       const randomProduct =
//         products[Math.floor(Math.random() * products.length)];
//       expanded.push({ ...randomProduct, id: expanded.length + 1 });
//     }

//     setData(expanded);
//     console.log("✅ 150 products loaded successfully");
//   };

//   useEffect(() => {
//     fatchAllProducts();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data, fatchAllProducts }}>
//       {children}
//     </DataContext.Provider>
//   );
// };
