import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import Food from "../components/Food"
import Categories from "../components/Categories"
import Subscribe from "../components/Subscribe"

function Home() {
  return (
    <div>
      <Hero/>
      <Food/>
      <Categories/>
      <Subscribe/>
    </div>
    
  );
}

export default Home;