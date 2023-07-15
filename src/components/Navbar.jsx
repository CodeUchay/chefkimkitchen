import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillQuestionCircle,
} from "react-icons/ai";

import { BsFillCartFill } from "react-icons/bs";
import {
  MdOutlineRestaurantMenu,
  MdCategory,
  MdBusinessCenter,
  MdFormatAlignLeft,
  MdContactPage,
  MdFavorite,
  MdHelp,
} from "react-icons/md";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-red-500 flex justify-between items-center h-20 px-6 fixed top-0 left-0 right-0 z-10 lg:px-16 ">
      {/* Hamburger Menu */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu
          size={30}
          className="text-white  hover:shadow-wine-500 hover:shadow-sm duration-100"
        />
      </div>
      {/* Chefkim Logo */}
      <div>
        <img src={logo} alt="Logo" />
      </div>
      {/* Search Icon and input */}
      <div className="bg-wine-500  rounded-full  shadow-orange-500 shadow-sm flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="" />
        <input
          //change place holder later in tailwind config
          className="bg-wine-500 p-2 w-full focus:outline-none rounded-full placeholder-orange-600 placeholder:italic"
          type="text"
          placeholder="Search food..."
        />
      </div>
      {/* Cart container */}
      <div className=" ml-4 hover:scale-110 duration-100 bg-wine-500 p-2 rounded-full cursor-pointer lg:px-5">
        <BsFillCartFill size={25} />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-red-600 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer "
        />
        <h2 className="text-2xl p-4">
          Chef <span className="font-bold text-orange-500">Kim</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 ">
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link to="/" className="flex justify-between items-center ">
                <AiFillHome size={25} className="mr-4 " /> Home
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link to="/menu" className="flex justify-between items-center ">
                <MdOutlineRestaurantMenu size={25} className="mr-4" /> Menu
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link
                to="/categories"
                className="flex justify-between items-center "
              >
                <MdCategory size={25} className="mr-4" /> Categories
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link to="/about" className="flex justify-between items-center ">
                <MdBusinessCenter size={25} className="mr-4" /> About
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link to="faq" className="flex justify-between items-center ">
                <AiFillQuestionCircle size={25} className="mr-4" /> FAQ
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link
                to="termsandconditions"
                className="flex justify-between items-center "
              >
                <MdFormatAlignLeft size={25} className="mr-4" /> Ts&Cs
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-orange-500 hover:rounded-sm"
            >
              <Link
                to="/contact"
                className="flex justify-between items-center "
              >
                <MdContactPage size={25} className="mr-4" /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
