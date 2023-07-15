import React from "react";
import { Link } from "react-router-dom";

function TermsAndConditions() {
  return (
    <div className=" m-8 pt-16 lg:p-16 ">
      <div className=" text-3xl font-bold text-center lg:text-4xl pb-5 border-b-2 border-red-500">
        <h1 className="text-orange-500">
          Terms <span className="text-white">And </span>Conditions
        </h1>
      </div>
      <div class="mt-5 lg:mt-8  bg-red-500 p-5 rounded">
        <h1 className="text-white text-xl lg:p-5 lg:text-2xl text-center">
          Here is a list of our <span className="text-orange-500">Terms </span> and <span className="text-orange-500">Conditions</span> </h1>
        <div className="flex flex-col justify-center item-center">
          <div className="  p-10">
            <h2 className="text-orange-500 text-xl lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <h3 className="text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              esse et vitae enim neque exercitationem quae incidunt fuga.
              Dignissimos placeat debitis quis veniam omnis ratione totam quia.
              Perferendis, quos cumque!
            </h3>
          </div>
          <div className="  p-10">
            <h2 className="text-orange-500 text-xl lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <h3 className="text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              esse et vitae enim neque exercitationem quae incidunt fuga.
              Dignissimos placeat debitis quis veniam omnis ratione totam quia.
              Perferendis, quos cumque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit atque numquam ut rem velit deserunt beatae assumenda blanditiis quam!
            </h3>
          </div>
          <div className="  p-10">
            <h2 className="text-orange-500 text-xl lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <h3 className="text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              esse et vitae enim neque exercitationem quae incidunt fuga.
              Dignissimos placeat debitis quis veniam omnis ratione totam quia.
              Perferendis, quos cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus ullam qui, architecto quaerat molestiae nam dolores animi cumque tempore ipsam reiciendis magnam. Impedit id omnis delectus, repellat iusto consectetur natus minima adipisci at, ad tempore odio provident recusandae harum!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
