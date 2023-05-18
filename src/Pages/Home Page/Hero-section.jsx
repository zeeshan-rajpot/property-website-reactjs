import React from "react";
import "./Herosection.css";
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/Mask Group 1.png";

const HeroSection = () => {
  return (
    <>
      <Container >
        <Row className={"Herosection"}>
          <Col lg={6} className="HerosectionCol" style={{marginTop:'55px'}}>
            <h1 className="h1" style={{color:'#FC780B'}}>Your Home  Finder </h1>

            <p style={{width:'90%', color:'#707070'}} >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum, ipsa ea illo cum minus vero labore cupiditate molestiae
              provident quaerat, quam exercitationem adipisci perspiciatis,
              earum quas voluptates ex odit sunt debitis. Non quo obcaecati
              nisi. Eius, quisquam ipsum.
            </p>
          </Col>
          <Col lg={6} className="HerosectionCol" style={{alignItems:'center'}}>
            <img
              src={houseimg}
              alt=""
              className="HerosectionImg"
              srcset=""
              width={"800px"}
              // height={"700px"}

            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
