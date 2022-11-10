import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import FanFact from "./components/FanFact";
import HappyClients from "./components/HappyClients";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurProjects from "./components/OurProjects";
import OurServices from "./components/OurServices";
import Solution from "./components/Solution";
import StarGrid from "./components/StarGrid";
const App = () => {
  return (
    <div className="app_container flex flex-col">
      <img src="/images/headergrid.png" alt="" className="absolute" />
      <Header />
      <HeroSection /> 
      <AboutUs />
      <FanFact />
      <Solution/>
      <OurServices/>
      <OurProjects/>
      <HappyClients/>
      <Blog/>
    {/*   <div className="w-[300px]">
          <img src="/images/hero_image1.png" alt="" />
      </div> */}
    </div>
  );
};

export default App;
