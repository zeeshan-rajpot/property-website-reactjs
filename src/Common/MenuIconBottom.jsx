import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MenuIconBottom.css'


const MenuIconBottom = () => {
  return (
 <>
  <Container>
          <Row>
            <Col xs={6} md={8}>
            <Link className="bottomloginbtn" to="/Login" >Login</Link>
            </Col>
            <Col xs={6} md={4}>
            <Link className="bottomloginbtn" to="/Signup" >Signup</Link>
            </Col>
          </Row>
          
          <Row>
            <Col xs={6} md={4}>
            <Link className="bottombtnflat" to="/Home" >Home</Link>
            </Col>
            <Col xs={6} md={4}>
            <Link className="bottombtnflat" to="/PropertiesPage" >Properties</Link>
            </Col>
            <Col xs={6} md={4}>
            <Link className="bottombtnflat" to="/Acosites" >Acosites</Link>
            </Col>
            <Col xs={6} md={4}>
            <Link className="bottombtnflat" to="/ProjectPage" >Project</Link>
            </Col>
          </Row>
        </Container>
 </>
  )
}

export default MenuIconBottom
