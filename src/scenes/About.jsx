import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" m-8 pt-16 lg:p-16 ">
      <div className=" text-3xl font-bold text-center lg:text-4xl pb-5 border-b-2 border-red-500">
        <h1>
          About <span className="text-orange-500">Chef Kim </span>{" "}
        </h1>
      </div>
      <div class="mt-10 py-16 bg-red-500">
        <div class="container mt-5 px-6 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-white font-bold md:text-4xl">
                 Chef Kim is a Resturant that strive to give you quality and taste
              </h2>
              <p class="mt-6 text-gray-100">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p class="mt-4 text-gray-100">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
