import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../assets/Loading4.webm";
import { Breadcrums } from '../Components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';

export const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleproduct] = useState(null);
  console.log(params);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
      const product = res.data;
      // fake store api তে discount নাই, তাই ডেমো discount যোগ করা হলো
      product.discount = 20;
      setSingleproduct(product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [params.id]);

  // মূল দাম ও ছাড়ের দাম হিসাব
  const OrginalPrice = singleProduct
    ? Math.round(singleProduct.price + (singleProduct.price * (singleProduct.discount || 0)) / 100)
    : 0;

  const DiscountedPrice = singleProduct
    ? Math.round(singleProduct.price - (singleProduct.price * (singleProduct.discount || 0)) / 100)
    : 0;

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />
          {/* single card */}
          <div className="max-w-6xl mx-auto md:p-6 grid md:grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* Product details */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              <div className="text-gray-700">
                {singleProduct.category?.toUpperCase()}
              </div>

              {/* দাম ও ডিসকাউন্ট */}
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-green-600">
                  ${singleProduct.price}
                </p>
                <span className="line-through text-gray-500">
                  ${OrginalPrice}
                </span>
                <span className="text-red-500 font-semibold">
                  -{singleProduct.discount || 0}%
                </span>
              </div>

              <p className="text-gray-600 text-sm md:text-md">
                {singleProduct.description}
              </p>

              {/* quantity selector */}
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-3 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition">
                  <IoCartOutline /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
