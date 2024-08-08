import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import agentpic from "../../images/agentpics.svg";
import "./AgentMap.css";

import mapimg from "../../images/Capture.svg";

const AgentMap = () => {
  return (
    <>
      <br />
      <br />
      <Container>
        <Row className="rowshadow">
          <Col lg={3} className="flex">
            <img src={agentpic} alt="" srcset="" />
          </Col>
          <Col lg={2} className="flex" style={{ flexDirection: "column" }}>
            <h6 className="text-secondary" style={{ alignItems: "start" }}>
              Agent
            </h6>
            <h5 style={{ color: "#EC6337" }}>Mazin Chahin</h5>
          </Col>
          <Col lg={7} className="flex">
            <img src={mapimg} alt="" srcset="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AgentMap;
