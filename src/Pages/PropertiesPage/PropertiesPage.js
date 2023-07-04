import React from "react";

import PropertiesHero from "./PropertiesHero";
import Navbars from "../../Common/NavBar";
import Footer from "../../Common/Footer";
import SearchBarProperties from "./SearchBarProperties";
import Propertiesimg from "./Propertiesimg";

import Properties from "./Properties";
import PaginationContainer from "./PaginationContainer";
import AreaDownTown from "./AreaDownTown";
import BottomBar from '../../Common/BottomNavBar'
import { Col, Container, Row } from "react-bootstrap";

const PropertiesPage = () => {


  return (
    <>
      <Navbars />
      <BottomBar />
      <PropertiesHero />
      <SearchBarProperties />
      <Propertiesimg />
      <Container style={{ marginTop: '20px' }}>

        <Row>
          <Col>
            <h1 className="h1" style={{ fontSize: '25px' }}>Property Buy in <span className="h1" style={{ color: '#EC6337', fontSize: '25px' }}>Downtown Dubai</span></h1>
          </Col>

        </Row>
      </Container>

      <Properties/>

      <PaginationContainer />
      <AreaDownTown />
      <Footer />
    </>
  );
};

export default PropertiesPage;