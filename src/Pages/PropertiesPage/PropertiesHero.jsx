import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PropertiesPage.css';

const PropertiesHero = () => {
  return (
    <div className='properties-Hero'>
      <div className="text-container">
        <Container>
          <Row className={"Herosection"}>
            <Col lg={6} className="HerosectionCol">
              <h1 className="h1">Find Your Dream Home</h1>
              <p style={{ width: '90%' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum, ipsa ea illo cum minus vero
                labore cupiditate molestiae provident quaerat, quam exercitationem adipisci perspiciatis, earum quas
                voluptates ex odit sunt debitis. Non quo obcaecati nisi. Eius, quisquam ipsum.
              </p>
            </Col>
            <Col lg={6} className="HerosectionCol" style={{ alignItems: 'center' }}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PropertiesHero;
