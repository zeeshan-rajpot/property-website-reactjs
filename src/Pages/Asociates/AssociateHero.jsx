import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Associate.css";

const AssociateHero = () => {
  return (
    <>
      <Container className="AssociateHeroBg" fluid>
        <Row>
          <Col className="flexcenter">
            <h1 className="rem4">Our Associate</h1>
            <p className="rem2">
              Text fill up rooms perfect for laid-back meet-ups to corporate
              boardrooms made for wowing potential clients. We’ve got your
              meeting room hire needs covered
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AssociateHero;
