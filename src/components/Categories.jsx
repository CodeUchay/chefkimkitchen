import React from 'react';
import { categories } from '../data/data.js';

function Category () {
  console.log(categories);
  return (
    <div className="px-10 pt-5 md:py-5 md:px-16 bg-red-500">
      <div className='border-b-2 border-b-wine-500 p-3 pb-5'>
      <h1 className='text-grey-600 font-bold text-4xl text-center'>
        Meal <span className='text-orange-500'>Categories</span>
      </h1>
      </div>
      {/* Categories */}
      <div className='m-5 lg:m-10 lg:p-8 grid grid-cols-2 md:grid-cols-3 gap-6 py-6 '>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-wine-500 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-500 lg:flex-col lg:h-[200px] lg:justify-center lg:items-center'
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;