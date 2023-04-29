import React from "react";
import Navbars from "../../Common/NavBar";
import HeroSection from "./Hero-section";
import SearchSection from "./Searchsection";
import SuitableProperty from "./SuitableProperty";
import Section3Home from "./Section3Home";
import Rentproperties from "./Rentproperties-card";
import Devider from "./Devider";
import BuyPropertiesCard from "./BuyPropertiesCard";
import AgentCrousel from "./AgentCrousel";
import HomeSearchSection from "./HomeSearchSection";
import Footer from "../../Common/Footer";


const Home = () => {
  return (
    <>
      <Navbars />

      <HeroSection />
      {/* <Devider /> */}
      <SearchSection />
      <SuitableProperty />
      <Section3Home />
      <Rentproperties />
      <Devider />

      <BuyPropertiesCard />
      <AgentCrousel />
      <HomeSearchSection />
      <Footer />
 
 
    </>
  );
};

export default Home;
