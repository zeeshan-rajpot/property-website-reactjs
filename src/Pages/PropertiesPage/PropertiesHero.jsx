import React from 'react'

import { Container, Row, Col } from "react-bootstrap";
import './PropertiesPage.css'
const PropertiesHero = () => {
  return (
    <>
    <div className='properties-Hero'>
    <Container>
        <Row className={"Herosection"} style={{height:'80vh'}}>
          <Col lg={6} className="HerosectionCol">
            <h1 className="h1" style={{color:'white'}}>Find Your Dream Home</h1>

            <p style={{width:'90%', color:'white'}} >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum, ipsa ea illo cum minus vero labore cupiditate molestiae
              provident quaerat, quam exercitationem adipisci perspiciatis,
              earum quas voluptates ex odit sunt debitis. Non quo obcaecati
              nisi. Eius, quisquam ipsum.
            </p>
          </Col>
          <Col lg={6} className="HerosectionCol" style={{alignItems:'center'}}>
           
    
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default PropertiesHero
