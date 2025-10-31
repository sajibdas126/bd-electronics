import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-gray-300 py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
           <h1 className="font-bold text-2xl md:text-3xl">
              <span className="text-red-500 font-serif">Bd</span>Electronics
            </h1>
          <p className="mt-2 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-3 text-sm">
            123 Electronics St, Style City, NY 10001
          </p>
          <p className="text-sm">Email: support@bdelectronics.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Size Guide
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-red-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-3">Stay in the Loop</h3>
          <p className="text-sm mb-3">
            Subscribe to get special offers, free giveaways, and more
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md text-gray-900 focus:outline-none border border-gray-50"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md text-white hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © 2025 <span className="text-red-500 font-semibold">BdElectronics</span>. All
        rights reserved.
      </div>
    </footer>
  );
};
