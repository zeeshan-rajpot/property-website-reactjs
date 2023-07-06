import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './SignUpOption.css'
import { Link } from 'react-router-dom'
export const SignUpOption = () => {
  return (
   <>
   <Container className='text-center mt-5'>
    <Row >
        <Col>
        <span className='fw-bold display-6'>Lets Help you get</span> 
        <span className='fw-bold display-6' style={{color: "#EC6337" }}>    Inprop</span>

        </Col>
    
    </Row>
    <Row>
        <h1 className='display-6 mt-4'>Are You Looking Too?</h1>  
        </Row>
        <Row>
        <Link  to ='/Sourcer'class="Source display-6 mt-4 shadow text-decoration-none">Source</Link>
        <Link to ='/Investor' class="Invest display-6 mt-4 mb-5 shadow text-decoration-none">Invest</Link>
        </Row>
   </Container>
   </>
  )
}
