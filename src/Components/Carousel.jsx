import React, { useEffect } from "react";
import { getData } from "../Context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Category } from "./Category";

function Carousel() {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // 🔹 Custom Previous Arrow
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer`}
      >
        <AiOutlineArrowLeft
          className="text-white bg-red-500 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all"
          size={40}
        />
      </div>
    );
  };

  // 🔹 Custom Next Arrow
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer`}
      >
        <AiOutlineArrowRight
          className="text-white bg-red-500 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all"
          size={40}
        />
      </div>
    );
  };

  // 🔹 Slider Settings
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 800,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative w-fullmin-h-[400px] md:min-h-[600px]  overflow-hidden">
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-10 md:py-16"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-5 md:px-20">
              {/* 🟣 Text Section */}
              <div className="space-y-5 text-center md:text-left">
                <h3 className="text-red-400 font-semibold text-sm">
                  Powering your world with the best electronics
                </h3>
                <h1 className="text-2xl md:text-4xl font-bold text-white uppercase">
                  {item.title}
                </h1>
                <p className="text-gray-300 max-w-md mx-auto md:mx-0 line-clamp-3">
                  {item.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-5 py-2 rounded-md hover:scale-105 transition-transform duration-300">
                  Shop Now
                </button>
              </div>

              {/* 🟣 Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[300px] md:w-[500px] object-contain shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
}

export default Carousel;
