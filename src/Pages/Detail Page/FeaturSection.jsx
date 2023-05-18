import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import clock from "../../images/clock.svg";
import parking from "../../images/parking.svg";
import elevator from "../../images/elevator.svg";
import bansignline from "../../images/ban-sign-line.svg";
import exclamationtriangleline from "../../images/exclamation-triangle-line.svg";
const FeaturSection = () => {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h5 className="text-secondary rem2">Things to note</h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={1}>
            <img src={clock} alt="" srcset="" />
          </Col>
          <Col>
            <p className="text-secondary">Check-in is at 4:00 pm</p>
            <p className="text-secondary">Checkout is at 11:00 am</p>
          </Col>
        </Row>

        <br />
        <Row>
          <Col lg={1}>
            <img src={parking} alt="" srcset="" />
          </Col>
          <Col>
            <h6>parking</h6>
            <p className="text-secondary">
              There is no free street parking nearby
            </p>
            <p className="text-secondary">
              There is no paid street parking nearby
            </p>
            <p className="text-secondary">
              There are no free parking lots nearby
            </p>
            <p className="text-secondary">There's a paid parking lot nearby</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={1}>
            <img src={elevator} alt="" srcset="" />
          </Col>
          <Col>
            <h6>Accessibility</h6>
            <p className="text-secondary">Check-in is at 4:00 pm</p>
            <p className="text-secondary">Checkout is at 11:00 am</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={1}>
            <img src={bansignline} alt="" srcset="" />
          </Col>
          <Col>
            <h6>Event Rules</h6>
            <p className="text-secondary">No smoking</p>
            <p className="text-secondary">
              No pets (not even really cute ones)
            </p>
            <p className="text-secondary">
              No parties (not even really quiet ones)
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={1}>
            <img src={exclamationtriangleline} alt="" srcset="" />
          </Col>
          <Col>
            <h6>Please note</h6>
            <p className="text-secondary">
              • There’s no cable. We’ve provided an HDMI cord for streaming
            </p>
            <p className="text-secondary">
              • In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeaturSection;
