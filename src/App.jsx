import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { Navbar } from "./Components/Navbar";
import axios from "axios";
import { Footer } from "./Components/Footer";

function App() {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude, longitude);

      const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      )}`;

      try {
        const response = await axios.get(url);
        // console.log("API Response:", response.data);

        const address = response.data?.address || {};
        const city =
          address.city || address.town || address.village || "Unknown";
        const country = address.country || "Unknown";

        setLocation({ city, country }); // ✅ এখন object আকারে
        setOpenDropdown(false);
        // console.log(`${city}, ${country}`);
      } catch (error) {
        console.log("Location fetch error:", error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
