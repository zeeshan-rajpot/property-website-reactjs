import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AreaDownTown.css'
import img from "../../images/propertycompimg.png";
const AreaDownTown = () => {
  return (
    <>
      <div className="section3div margin3sectiontop " style={{marginTop:'10vh'}}>
        <Container>
          <Row className={"heightmobile   marginweb"} style={{ height: "60vh" }}>
            <Col lg={6} className="HerosectionCol">
              <h2 className="readyheading">
                <b>Area</b>{" "}
              </h2>

              <p>near Downtown Dubai</p>

              <p className="text-secondary" style={{ width: "80%" }}>
                Text fill up..... have ratings on our platform. A ‘Book It
                Again’ percentage score tells you how a event has performed ast.
                ter 10,000 venues have ratings on our platform.Text fill up.....
                have ratings on our platform. A ‘Book It Again’ percentage score
                tells you how a event has performed ast. ter 10,000 venues have
                ratings on our platform.
              </p>
            </Col>

            <Col lg={6} className="HerosectionCol  mobilednone">
              <img src={img} alt="" srcset="" className="mobilednone" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AreaDownTown;
