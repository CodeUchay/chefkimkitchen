import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'

import { Link } from "react-router-dom";

function Footer () {
  return (
    <div className="px-10 pt-5 md:py-5 md:px-16 bg-red-500">
      <h1 className='text-grey-600 font-bold text-4xl text-center'>
        Quick <span className='text-orange-500'>Links</span>
      </h1>
      <hr className="my-6"></hr>
    <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
      
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur <span className="text-orange-500">Chef Kim</span> elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href='https://wa.me/234'> <FaWhatsapp size={30} className='hover:scale-110 duration-300 hover:text-orange-500'/> </a>
            <a href="https://instagram.com/chefkim_"> <FaInstagram size={30} className='hover:scale-110 duration-300 hover:text-orange-500' /> </a>
            <a href="https://twitter.com/adarhx"><FaTwitter size={30} className='hover:scale-110 duration-300 hover:text-orange-500' /></a>
            <a href="mailto:chefkimkitchenn@gmail.com"><FiMail size={30} className='hover:scale-110 duration-300 hover:text-orange-500'/></a>
            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between sm:mx-10 lg:mx-14  mt-6'>
    <div>
        <h6 className='font-medium text-orange-500'>Links</h6>
        <ul>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'> <Link to='/'>Home</Link></li>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'><Link to='/menu'>Menu</Link></li>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'><Link to='/categories'>Categories</Link></li>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'><Link to='/'>Partners</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-orange-500'>Support</h6>
        <ul>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'>About</li>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'>FAQ</li>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'>Ts&Cs</li>
            <li className='py-2 text-sm hover:text-orange-600 cursor-pointer'>Contact</li>
        </ul>
    </div>
    
    
      </div>
    </div>
    </div>
  );
};

export default Footer;