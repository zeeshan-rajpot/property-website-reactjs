import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ProjectHero.css";

const ProjectHero = () => {
  return (
    <>
      <Container className="ProjectHeroBg" fluid>
        <Row>
          <Col className="textcol text-center">
            <h1 className="h1">Discover Heroic Living</h1>
            <p className="projectHerotext  rem2">
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

export default ProjectHero;
