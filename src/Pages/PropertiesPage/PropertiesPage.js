import React from "react";
import PropertiesHero from "./PropertiesHero";
import Navbars from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import SearchBarProperties from "./SearchBarProperties";
import Propertiesimg from "./Propertiesimg";
import PropCard from "./PropCard";
import PaginationContainer from "./PaginationContainer";
import houseimg from "../../images/jarek-ceborski-jn7uVeCdf6U-unsplash.png";
import AreaDownTown from "./AreaDownTown";
import BottomBar from '../../Common/BottomNavBar'
const PropertiesPage = () => {
  return (
    <>
      <Navbars />
      <BottomBar/>
      <PropertiesHero />
      <SearchBarProperties />
      <Propertiesimg />
      <PropCard 
      image={houseimg}
      title='Aparment'
      price='1800'
      timetolist='17min ago'
      bedroom='2 bedrooms'
      bathroom='3 bathroom'
      area='1,354 sqft'
      location='Made Residences by ARTAR, Downtown Dubai, Dubai'
      
      />
      <PropCard 
      image={houseimg}
      title='Aparment'
      price='1800'
      timetolist='17min ago'
      bedroom='2 bedrooms'
      bathroom='3 bathroom'
      area='1,354 sqft'
      location='Made Residences by ARTAR, Downtown Dubai, Dubai'
      
      />
      <PropCard 
      image={houseimg}
      title='Aparment'
      price='1800'
      timetolist='17min ago'
      bedroom='2 bedrooms'
      bathroom='3 bathroom'
      area='1,354 sqft'
      location='Made Residences by ARTAR, Downtown Dubai, Dubai'
      
      />
      <PropCard 
      image={houseimg}
      title='Aparment'
      price='1800'
      timetolist='17min ago'
      bedroom='2 bedrooms'
      bathroom='3 bathroom'
      area='1,354 sqft'
      location='Made Residences by ARTAR, Downtown Dubai, Dubai'
      
      />
      <PropCard 
      image={houseimg}
      title='Aparment'
      price='1800'
      timetolist='17min ago'
      bedroom='2 bedrooms'
      bathroom='3 bathroom'
      area='1,354 sqft'
      location='Made Residences by ARTAR, Downtown Dubai, Dubai'
      
      />
      <PaginationContainer/>
      <AreaDownTown/>
      <Footer />
    </>
  );
};

export default PropertiesPage;
