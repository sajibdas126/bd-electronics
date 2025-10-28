import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const { data, fatchAllProducts } = useContext(DataContext);
  console.log(data);
  useEffect(() => {
    fatchAllProducts();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold  font-sans text-sm">
                    Powering your world the Best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-3">
                    Shop Now
                  </button>
                </div>
                {/* slider img */}
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
