import React from "react";
import { useState , useEffect } from "react";
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
import { Col, Container, Row } from "react-bootstrap";
import { ApiLink } from "./Apilink";
const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertyData = await ApiLink();
        setProperties(propertyData);
      } catch (error) {
        // Handle error
      }
    };

    fetchProperties();
  }, []);

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
   
      <PaginationContainer />
      <AreaDownTown />
      <Footer />
    </>
  );
};

export default PropertiesPage;