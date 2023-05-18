import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PropertiesImg.css";
import img1 from "../../images/jonathan-borba-YdomJdFdbDo-unsplash.svg";
import img2 from "../../images/mueen-agherdien-t1U-dVo7NBo-unsplash.svg";
import img3 from "../../images/dineshkumar-m-CfBDgt5BafU-unsplash.svg";
import img4 from "../../images/r-architecture-Cn87TISYij8-unsplash.svg";
import img5 from "../../images/r-architecture-wDDfbanbhl8-unsplash.svg";
import ExampleImg from "./Example";

const Propertiesimg = () => {
  return (
    <Container style={{ marginTop: "8vh" }}>
      <Row>
        <Col>
        <h3 className="rem3">Discover Your Best <span style={{color:'#EC6337'}}> House Here </span></h3>
        </Col>
      </Row>
      <Row>      <Row>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg position-relative"
          style={{ alignItems: "end" }}
        >
          <ExampleImg img={img1} text="Appartment" number="153"  className="marginb20" />
          <ExampleImg img={img2} text="Penthouses"  number="17" />
        </Col>
        <Col xs={12} lg={4} className="dflexincol  PropertiesMobileImg">
       
          <ExampleImg img={img3} text="hhhhhhhhhhhh"  />
        </Col>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg"
          style={{ alignItems: "Start" }}
        >
     <ExampleImg img={img4} text="Penthouses" number="166"  className="marginb20" />
          <ExampleImg img={img5} text="hhhhhhhhhhhh"  />
        </Col>
      </Row>
      </Row>

    </Container>
  );
};

export default Propertiesimg;
