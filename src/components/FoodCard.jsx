import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className=" hover:scale-105 md:mx-8 lg:mx-0 cursor-pointer duration-500 rounded-2xl hover:shadow-2xl shadow-wine-500 hover:shadow-orange-600  shadow-lg">
      {/* food container */}
      <div className="bg-wine-500 px-5 py-3 rounded-t-2xl flex justify-center items-center ">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[130px] object-cover rounded-lg lg:w-[95%] lg:h-[150px] md:w-[85%] md:h-[250px]"
          style={{ borderRadius: "50%" }}
        />
      </div>
      {/* Details of Food, Price and Cart */}
      <div className="rounded-b-2xl  bg-wine-500 flex justify-center items-center">
        <div className="flex mb-4 justify-between flex-col items-center gap-1">
          <p className=" md:text-2xl lg:text-xl  text-orange-500 border-b border-b-wine-500 ">
            {item.name}
          </p>
            <p className=" text-red-800 italic text-xs">From:</p>
            <span className="bg-red-600 text-orange-500 px-2 rounded">
              {"N2,999"}
            </span>
            <button className="border-none  bg-orange-500  hover:bg-red-500 hover:scale-105 duration-150 shadow-sm shadow-wine-500  ">
              <h4 className="text-xs whitespace-nowrap">Add to Cart</h4>
            </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
