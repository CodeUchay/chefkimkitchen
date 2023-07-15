import React, { useState, useEffect } from "react";
import {
    AiFillBell
  } from "react-icons/ai";

function Subscribe() {
  return (
    <div className="px-8 py-5 md:py-5 md:mx-16">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        News Letters and Promos
      </h1>
      <hr className="my-6"></hr>
      <div className="flex flex-col justify-center items-center m-10 lg:gap-16 lg:flex-row ">
        <div className="flex flex-col  bg-red-500 rounded-sm p-10 gap-3">
            <h1 className="font-bold">Subscribe To Our News Letter </h1>
            <p>Get quick information about our promos deals and sales </p>
        </div>
        <div className="flex  p-5">
        <div className="flex rounded-full">
        <input
        //change place holder later in tailwind config
          className="bg-red-500 p-3 w-full focus:outline-none rounded-l-full placeholder-white"
          type="text"
          placeholder="Email..."
        />
            <button className="border-red-500 bg-white text-red-500 rounded-r-full flex justify-center item-center pt-3 hover:bg-orange-500 hover:text-white hover:border-none">Subscribe <AiFillBell size={25}/></button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Subscribe