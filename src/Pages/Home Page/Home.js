import React from "react";



import Navbars from "../../Common/NavBar";
import HeroSection from "./Hero-section";
import SearchSection from "./Searchsection";
import SuitableProperty from "./SuitableProperty";
import Section3Home from "./Section3Home";
// import Rentproperties from "./Rentproperties-card";
// import Devider from "./Devider";
import BuyPropertiesCard from "./BuyPropertiesCard";
// import AgentCrousel from "./AgentCrousel";
import HomeSearchSection from "./HomeSearchSection";
import Footer from "../../Common/Footer";
import BottomBar from "../../Common/BottomNavBar";
import Featured from "./Featured";
import MobileFooter from "../../Common/MobileFooter";


const Home = () => {


  return (
    <>
      {/* <Navbars /> */}
      {/* <BottomBar /> */}

      <HeroSection />
      {/* <Devider /> */}
      <SearchSection />
      <Featured/>

      <SuitableProperty />
      <Section3Home />
      {/* <Rentproperties /> */}

      <BuyPropertiesCard />
      {/* <AgentCrousel /> */}
      <HomeSearchSection />

      
   
      <Footer />
      <MobileFooter/>
    </>
  );
};

export default Home;
