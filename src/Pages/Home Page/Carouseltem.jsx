import React from 'react'
import Carousel from 'react-grid-carousel';
import './CarouselItm.css'
import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
const Cards = (props) => {
  return (
    <div>
      <Container>
        <Row >
      
        <Col >

          <Card>
            <span className='blurbackground' style={{position:'absolute', marginTop:'51%' ,marginBottom:'10px'}}>{props.properties}</span>
           <span className=' displayflexmobile blur' style={{position:'absolute', marginTop:'47%', marginLeft:'7%'  , color:'white'}}>
            <span  > {props.location}</span>
            <span  > 78</span>
            </span>
               <Card.Img variant="top" src={props.path} className='boderradius' />
       
              
      </Card>
        </Col>
     
    </Row>
    </Container>
    </div>
  )
}

export default Cards
