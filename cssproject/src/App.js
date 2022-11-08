import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StarGrid from "./components/StarGrid";
const App = () => {
  return (
    <div className="app_container flex flex-col">
      <img src="/images/headergrid.png" alt="" className="absolute" />
      <Header />
      <HeroSection /> 
      <AboutUs />
    {/*   <div className="w-[300px]">
          <img src="/images/hero_image1.png" alt="" />
      </div> */}
    </div>
  );
};

export default App;
