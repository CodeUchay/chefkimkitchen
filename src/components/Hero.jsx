import React from "react";
import banner from "../assets/banner1.png";

function Hero() {
  return (
    //i added mt 20 to the first container so that it doesnt blend with the sticky navbar
    <div className="bg-red-500 mt-20">
      <div className="relative">
        {/* Overlay */}
        <div className="px-4 absolute w-full h-full  max-h-[500px] flex flex-col justify-center ">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="px-4 text-orange-500 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:ml-8 ">
              Welcome to
            </h1>
            <h1 className="px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl  lg:ml-8">
              {" "}
              Chef Kim's Kitchen
            </h1>
          </div>
          {/* Motto */}
          <h3 className="font-WindSong px-4 pt-2 text-xs md:text-2xl font-extralight lg:text-2xl italic font-family: lg:ml-8 lg:py-4">
            {" "}
            The good food plug...{" "}
          </h3>
          {/* buttons */}
          <div className=" mt-2 p-4 text-gray-200 flex flex-row item-center gap-4 lg:text-2xl lg:ml-8 lg:mt-4">
            <button className="bg-wine-500 text-orange-500  shadow-wine-500 shadow-sm hover:bg-orange-500 hover:shadow-red-500 hover:text-red-500 hover:scale-105 duration-100 border-none md:flex items-center py-1 rounded-full ">
              View Menu
            </button>
            <button className="bg-white text-wine-500  shadow-xl shadow-red-500  hover:bg-orange-500 hover:text-white hover:scale-105 duration-100 border-none md:flex items-center py-1 rounded-full">
              Order
            </button>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover transition ease-in duration-300"
          src={banner}
          alt="Food Banner"
        />
      </div>
    </div>
  );
}

export default Hero;
