import React, { useState } from "react";
import { MdContactEmergency } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div className=" m-8 pt-16 lg:p-16 ">
    <div className=" text-3xl font-bold text-center lg:text-4xl pb-5 border-b-2 border-red-500">
      <h1>Contact  <span className="text-orange-500">Us </span> </h1>
    </div>
    <section id="contact" className="relative bg-red-500 rounded mt-5 lg:mt-10 p-5">
      <div className="flex flex-col text-center items-center justify-center mt-5 ">
        
        <p className="text-white text-xl lg:p-5 lg:text-2xl text-center">
          You can contact <span className="text-orange-500 font-bold ">Chef Kim</span> for any other information and i will be sure to
          respond at my earliest convenience
        </p>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden  sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Rouen,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-red-600 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-white">
                Lekki, <br />
                Lagos
              </p>
            </div>
            <div className="lg:w-80 px-6 mt-4 lg:mt-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <div className="overflow-x-auto">
                <a className="text-orange-500 leading-relaxed">
                  chefkimkitchenn@gmail.com
                </a>
              </div>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-white">+33758300195</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <p className="leading-relaxed mb-5 dark:text-white">
            Software engineering is like playing with toys. I love complex toys!
            Lets Play! or Do you have a full stack or Artificial intelligence
            project you're working on?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-red-700 rounded border border-red-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-red-700 rounded border border-red-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-red-700 rounded border border-red-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-600 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    </div>

  );
}

export default Contact;