import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./residence.css";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import Whatsapp from "../../images/Whatsapp.svg";
const ResidenceSection = () => {
  return (
    <>
      <br />
      <br />
      <Container>
        <Row>
          <Col lg={8}>
            <h3 className="text-secondary rem3" >MADA RESIDENCE</h3>

            <h5 className="text-secondary">
              Made Residences by ARTAR, Downtown Dubai, Dubai
            </h5>
            <p className="text-secondary">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
            <h3 className="text-secondary rem3">DOWNTOWN DUBAI</h3>
            <p className="text-secondary ">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content.
            </p>
          </Col>
          <Col lg={1} className="line-col ">
            <span class="vertical-line d-flex"></span>
          </Col>
          <Col lg={3}>
            <h5 className="text-secondary rem3">MADA RESIDENCE</h5>
            <p className="text-secondary">
              Made Residences by ARTAR, Downtown Dubai, Dubai
            </p>
            <h4 className="price rem3">180,000 AED/year</h4>
            <img src={phone} alt="" srcset="" />
            <span className="text-secondary rem2">Call</span>
            <br />
            <img src={email} alt="" srcset="" />
            <span className="text-secondary rem2">Email</span>
            <br />
            <img src={Whatsapp} alt="" srcset="" />
            <span className="text-secondary rem2">Whatsapp</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResidenceSection;
