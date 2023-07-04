import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PropertiesImg.css";

import img4 from "../../images/r-architecture-Cn87TISYij8-unsplash.svg";
import img5 from "../../images/r-architecture-wDDfbanbhl8-unsplash.svg";
import ExampleImg from "./Example";

const Propertiesimg = () => {
  return (
    <Container style={{ marginTop: "12vh" }}>
      <Row>
        <Col>
          <h3 className="rem3">Discover Your Best <span style={{ color: '#EC6337' }}> House Here </span></h3>
        </Col>
      </Row>
      {/*       
          <Row>
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
      </Row> */}


      <Row>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg position-relative "
          style={{ alignItems: "end" }}
        >
          <div className="mobileviewimgproperty img-wrapper">

            <img className="marginb20 PropertyPageImgLeft img-responsive" src="https://images.unsplash.com/photo-1652180076195-9b4c82e390a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="Image 1" />
            <div className="img-overlay">
              <span className="iamgeabovetext">House</span>
            </div>
          </div>
          <div className="mobileviewimgproperty img-wrapper">

            <img className=" PropertyPageImgLeft img-responsive" src="https://plus.unsplash.com/premium_photo-1661962680724-d926ef951cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1YmFpJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 1" />
            <div className="img-overlay">
              <span className="iamgeabovetext">Appartment</span>
            </div>
          </div>

        </Col>

        <Col xs={12} lg={4} className="dflexincol  PropertiesMobileImg ">
          <div className="img-wrapper">
            <img className="PropertyPageImgCenter" src="https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Big Image" />
            <div className="img-overlay">
              <span className="iamgeabovetext">Building</span>
            </div>

          </div>
        </Col>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg"
          style={{ alignItems: "Start" }}
        >
          <div className="img-wrapper">
            <img src="https://images.unsplash.com/photo-1556284664-800b14d70a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGR1YmFpJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 3" className="marginb20 PropertyPageImgRight" />
            <div className="img-overlay">
              <span className="iamgeabovetext">Flats</span>
            </div>

          </div>
          <div className="img-wrapper">
            <img className="PropertyPageImgRight" src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 4" />
            <div className="img-overlay">
            <span className="iamgeabovetext">Room</span>
          </div>
          
          </div>

        </Col>
      </Row>




    </Container>
  );
};

export default Propertiesimg;
