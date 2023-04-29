import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AssociateImgCard from "./AssociateImgCard.jsx";
import Associate1 from "../../images/austin-distel-h1RW-NFtUyc-unsplash.svg";
import agent2 from "../../images/agent2.svg";
import agent3 from "../../images/agent3.svg";
import agent4 from "../../images/agent4.svg";
import agent7 from "../../images/agent7.svg";
import agent5 from "../../images/agent5.svg";
import agent6 from "../../images/agent6.svg";


const OurAssociateImg = () => {
  return (
    <>
      <div style={{ paddingBottom: "50px", paddingTop: "50px" }}>
        <Container>
          <Row style={{ paddingBottom: "50px", paddingTop: "50px" }}>
            <Col style={{ textAlign: "center", alignItems: "center" }}>
              <h1 className="rem5"> Our Associate</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="Associatecard">
              <img src={Associate1} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>
            <Col lg={4} className="Associatecard">
              <img src={agent2} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>
            <Col lg={4} className="Associatecard">
              <img src={agent3} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>

            <Col lg={4} className="Associatecard">
              <img src={agent4} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>


            <Col lg={4} className="Associatecard">
              <img src={agent7} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>



            <Col lg={4} className="Associatecard">
              <img src={agent5} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>



            <Col lg={4} className="Associatecard">
              <img src={agent6} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>
            <Col lg={4} className="Associatecard">
              <img src={agent2} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>
            <Col lg={4} className="Associatecard">
              <img src={agent3} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>

            <Col lg={4} className="Associatecard">
              <img src={agent4} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>
            <Col lg={4} className="Associatecard">
              <img src={agent2} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>
            <Col lg={4} className="Associatecard">
              <img src={agent3} alt="" srcset="" />
              <AssociateImgCard
                name="Mazin Chahin"
                designation="Renaissance Real Estate"
                location="Syria"
                language="English, Arabic"
                age="22"
              />
            </Col>

        


           
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurAssociateImg;
