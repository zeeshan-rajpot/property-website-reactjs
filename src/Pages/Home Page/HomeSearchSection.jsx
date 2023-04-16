import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/Component 23 – 1.svg";
import "./Suitableproperty.css";
import "./HomeSearchSection.css";
import Devider from "./Devider";

const HomeSearchSection = () => {
  return (
    <>
      <div className="bgimgchair" style={{  marginTop: "5vh" }}>
        <Container>
          <Row
            className={"Herosection margintop-mobile marginweb"}
            style={{ height: "40vh", marginTop: "10px", marginBottom: "20px" }}
          >
            <Col lg={6} className="HerosectionCol section3text ps-5">
              <h3 className="rem3">
                Home
                <span
                  className="rem3"
                  style={{ color: "#FC780B", fontWeight: "600" }}
                >
                  {" "}
                  Search{" "}
                </span>
                made easy
              </h3>

              <p style={{ textAlign: "strart" }}>
                Discover how we help you find your dream home
              </p>
              <div className="line"></div>
              <h3 className="rem3">
                Find your <span style={{ color: "#FC780B" ,fontWeight: "600" }}> SuperAgent</span>
              </h3>
              <p>
                The most responsive agents with up to date improved accuracy on
                the properties you are searching for.
              </p>
              <button href="#" class="Find-buttun">
                Find Out more
              </button>
            </Col>
            <Col
              lg={6}
              className="HerosectionCol  mobile-disply-none"
              style={{ alignItems: "end" }}
            ></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeSearchSection;
