import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png"

function Cart({ location, getLocation }) {
  const { cartItem, updateQuntaty,deleteItem } = useCart();
  const { user } = useCart();
  const navigete = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });

  // auto fill from detected location
  useEffect(() => {
    if (location) {
      setFormData((prev) => ({
        ...prev,
        address: location.country || "",
        state: location.state || "",
        postcode: location.postcode || "",
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">My Cart({cartItem.length})</h1>

          {/* cart items */}
          <div className="mt-10">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-md flex items-center justify-between mt-3 p-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-md"
                  />
                  <div>
                    <h1 className="w-[300px] line-clamp-2 text-sm">
                      {item.title}
                    </h1>
                    <p className="text-red-500 font-semibold text-lg">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="bg-red-500 text-white flex gap-4 rounded-md font-bold text-xl p-2">
                  <button onClick={() => updateQuntaty(cartItem,item.id, "decrease")}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() =>  updateQuntaty(cartItem,item.id ,"increase")}>+</button>
                </div>

                <span onClick={()=>deleteItem(item.id)} className="hover:bg-white/60 transition-all rounded-full p-3">
                  <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                </span>
              </div>
            ))}
          </div>

          {/* layout */}
          <div className="grid grid-cols-2 gap-20">
            {/* delivery form */}
            <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
              <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>

              {/* FullName */}
              <div className="flex flex-col space-y-1">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  className="p-2 rounded-md"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-1">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="p-2 rounded-md"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              {/* state and postcode */}
              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    className="p-2 rounded-md w-full"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label>PostCode</label>
                  <input
                    type="text"
                    name="postcode"
                    className="p-2 rounded-md w-full"
                    value={formData.postcode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* country and phone */}
              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    className="p-2 rounded-md w-full"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phone"
                    className="p-2 rounded-md w-full"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* submit */}
              <button className="bg-red-500 text-white px-3 py-2 rounded-md mt-3">
                Submit
              </button>

              <div className="flex items-center text-center w-full justify-center text-gray-700">
                ---------OR----------
              </div>

              <div className="flex justify-center">
                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-3 py-2 rounded-md"
                >
                  Detect Location
                </button>
              </div>
            </div>

            {/* Bill details */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
              <h1 className="text-gray-800 font-black text-xl">Bill details</h1>

              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-gray-700">
                  <LuNotebookText /> Items total
                </h1>
                <p>${totalPrice}</p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-gray-700">
                  <MdDeliveryDining /> Delivery Charge
                </h1>
                <p className="text-red-500 font-semibold">
                  <span className="text-gray-600 line-through">$25</span> FREE
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-2 text-gray-700">
                  <GiShoppingBag /> Handling Charge
                </h1>
                <p className="text-red-500 font-semibold">$5</p>
              </div>

              <hr className="text-gray-200 mt-2" />

              <div className="flex justify-between items-center mt-3">
                <h1 className="font-semibold text-lg">Grand total</h1>
                <p className="font-semibold text-lg">${totalPrice + 5}</p>
              </div>

              {/* apply code */}
              <div>
                <h1 className="font-semibold text-gray-700 mb-3 mt-7">
                  Apply Promo Code
                </h1>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="p-2 rounded-md w-full"
                  />
                  <button className="bg-white text-black border border-gray-200 px-4 py-1 rounded-md">
                    Apply
                  </button>
                </div>
              </div>

              <button className="bg-red-500 w-full text-white px-3 py-2 rounded-md mt-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center h-[600px]">
          <h1 className="text-red-500/80 font-bold text-5xl text-muted">
            Oh no! Your cart is Empty
          </h1>
          <img src={emptyCart} alt="" className="w-[400px]" />
          <button onClick={()=>navigete('/products')} className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer">Continue Shapping</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
