import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/Group 9426.png";
import "./Suitableproperty.css";

const HomeSearchSection = () => {
  return (
    <Container fluid>
      <Row className={"Herosection margintop-mobile marginweb"} style={{height:'50vh' , marginTop:'10px' , marginBottom:'20px'}}>
        <Col lg={6} className="HerosectionCol section3text ps-5">
          <h3>
            Home
            <span style={{ color: "#CCC462" }}> Search</span> made easy
          </h3>

          <p style={{ textAlign: "strart" }}>
            Discover how we help you find your dream home
          </p>
          <h4>
            Find your <span style={{ color: "#CCC462" }}> SuperAgent</span>
          </h4>
          <p>
            The most responsive agents with up to date improved accuracy on the
            properties you are searching for.
          </p>
          <button href="#" class="Find-buttun">
            Find Out more
          </button>
        </Col>
        <Col
          lg={6}
          className="HerosectionCol  mobile-disply-none"
          style={{ alignItems: "end" }}
        >
          <img
            src={houseimg}
            alt=""
            className="HerosectionImg"
            srcset=""
            width={'500px'}
            height={'auto'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSearchSection;
