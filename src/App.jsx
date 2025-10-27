import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
