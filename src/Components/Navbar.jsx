import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export const Navbar = ({
  location,
  getSelection,
  openDropdown,
  setOpenDropdown,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const {cartItem}= useCart()

  return (
    <div className="bg-white py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
        {/* 🟥 Logo + Location */}
        <div className="flex gap-5 items-center">
          <Link to="/">
            <h1 className="font-bold text-2xl md:text-3xl">
              <span className="text-red-500 font-serif">Bd</span>Electronics
            </h1>
          </Link>

          {/* 📍 Location (hidden on small) */}
          <div className="hidden md:flex gap-1 cursor-pointer text-gray-700 items-center relative">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.country}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
            {openDropdown && (
              <div className="absolute top-10 left-0 w-[250px] bg-white shadow-2xl border rounded-md p-3 z-50">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="font-semibold text-lg">Change Location</h1>
                  <CgClose
                    className="cursor-pointer text-gray-500"
                    onClick={toggleDropdown}
                  />
                </div>
                <button
                  onClick={getSelection}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400"
                >
                  Detect my location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 🟦 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7 font-semibold">
          <ul className="flex gap-7 items-center">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-black hover:text-red-500"
                  } transition-all`
                }
              >
                <li>{link.label}</li>
              </NavLink>
            ))}
          </ul>

          {/* Cart */}
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
              {cartItem.length}
            </span>
          </Link>

          {/* Clerk Auth */}
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* 🟨 Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
              0
            </span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <CgClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* 🟩 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t p-5 space-y-5 text-center font-semibold">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-black"
                } block`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Clerk Auth in Mobile */}
          <div className="flex justify-center">
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
};
