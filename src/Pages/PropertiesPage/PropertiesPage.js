import React from "react";
import MobileFooter from "../../Common/MobileFooter";
import PropertiesHero from "./PropertiesHero";
import Navbars from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import SearchBarProperties from "./SearchBarProperties";
import Propertiesimg from "./Propertiesimg";
import AddProperty from '../UploadProperty/AddProperty'
import Properties from "./Properties";
import PaginationContainer from "./PaginationContainer";
import AreaDownTown from "./AreaDownTown";
import BottomBar from '../../Common/BottomNavBar'
import { Col, Container, Row } from "react-bootstrap";

const PropertiesPage = () => {


  return (
    <>

      <AddProperty/>
      <PropertiesHero />
      <div style={{position:'absolute' ,marginTop:'-19px'}}>
      <SearchBarProperties />
      </div>
      <Propertiesimg />
      

      <Properties/>

      <PaginationContainer />
      <AreaDownTown />
      <Footer />
      <MobileFooter/>
    </>
  );
};

export default PropertiesPage;