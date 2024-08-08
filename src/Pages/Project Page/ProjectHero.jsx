import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ProjectHero.css";
import bg from '../../images/projectcard.png'

const ProjectHero = () => {
  return (
    <>
      <Container className="ProjectHeroBg dektopview" fluid>
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






      <div className='bg-image-container mobileview'>
      <img src={bg} alt='background' />
      <div className='text-overlay'>
        <h1>Discover Heroic Living</h1>
        <p>
          Text fill up rooms perfect for laid-back meet-ups to corporate
          boardrooms made for wowing potential clients. We’ve got your meeting
          room hire needs covered
        </p>
      </div>
    </div>

      
    </>
  );
};

export default ProjectHero;
