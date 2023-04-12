import React from "react";
import "./Herosection.css";
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/3d-view-house.svg";

const HeroSection = () => {
  return (
    <>
      <Container>
        <Row className={"Herosection"}>
          <Col lg={6} className="HerosectionCol">
            <h1 className="h1">Your Home <span style={{color:'#CCC462'}}> Finder </span></h1>

            <p style={{textAlign:'justify'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum, ipsa ea illo cum minus vero labore cupiditate molestiae
              provident quaerat, quam exercitationem adipisci perspiciatis,
              earum quas voluptates ex odit sunt debitis. Non quo obcaecati
              nisi. Eius, quisquam ipsum. Nihil omnis exercitationem assumenda
              quidem hic. Recusandae dolor quo dolores dolorum?
            </p>
          </Col>
          <Col lg={6} className="HerosectionCol" style={{alignItems:'center'}}>
            <img
              src={houseimg}
              alt=""
              className="HerosectionImg"
              srcset=""
              width={"700px"}
              height={"700px"}

            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
