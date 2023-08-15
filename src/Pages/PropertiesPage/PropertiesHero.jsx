import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PropertiesPage.css';
import searchimg from "../../images/17dd779b09de28b993c60163f6497ba0.svg";
import houseicon from "../../images/Group 1249.svg";
import roomicon from "../../images/living-room-icon.png";
import bedicon from "../../images/Component 24 – 1.svg";
import locationicon from "../../images/office-address-icon.svg";
import moneyicon from "../../images/finance-icon.svg";
import foodicon from "../../images/breakfast-time-icon.svg";
import bg from '../../images/valentin-petkov-YQyMiu8yvMQ-unsplash.svg'

const PropertiesHero = () => {
  return (
    
    <>
    <div className='properties-Hero dektopview'>
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









   <div className='bg-image-container mobileview'>
      <img src={bg} alt='background' />
      <div className='text-overlay' style={{textAlign:'start' ,}}>
        <h1>Find Your Dream Home</h1>
        <p style={{width:'45%'}}>
          Text fill up rooms perfect for laid-back meet-ups to corporate
          boardrooms made for wow potential clients. We’ve got your meeting room
          hire needs covered
        </p>
      </div>
    </div>
    </>
  );
};

export default PropertiesHero;
