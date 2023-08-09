import React from "react";
import Carousel from "react-grid-carousel";
import "./CarouselItm.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import roomicon from "../../images/living-room-icon.png";
import bedicon from "../../images/Component 24 – 1.svg";

const Cards = (props) => {
  return (
    <div>
      <Container>
        <Row >
          <Col >
            <Card  className="border desktopcard" style={{ overflow: "hidden" , borderTopLeftRadius:'38px' , borderTopRightRadius:'38px' }}>
              <Card.Img
                variant="top"
                src={props.path}
                className="boderradius border"
              />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex" style={{alignItems:'center' , justifyContent:'space-between'}}>
                  <span className="h1" style={{ fontSize: "20px" , color:'#ec6337'}}>
                   {props.price} AED/year
                  </span>
                  <button href="#" class="houseorapt text-secondary" >House</button>
                  </div>
                </Card.Title>
                <Card.Text> <span className="text-secondary">{props.location}</span></Card.Text>
                <span style={{ fontSize: "16px" }}>
                  <img src={roomicon} alt="" srcset="" /> <span className="text-secondary"> {props.room}</span>
                </span>
                <span style={{ fontSize: "16px" , marginLeft:'20px' }}>
                  <img src={bedicon} alt="" srcset="" /> <span className="text-secondary"> {props.bath}</span>
                </span>
              </Card.Body>
            </Card>


            <Card className="shadow mobilecard" style={{ overflow: "hidden", borderTopLeftRadius: '38px', borderTopRightRadius: '38px' }}>
              <Card.Img height='300px' variant="top" src={props.path} className="border" style={{ borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px' }} />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="h1" style={{ fontSize: "20px", color: '#ec6337' }}>
                    {props.price} AED/year
                  </span>
                  {/* <button href="#" class="houseorapt" >House</button> */}
                  <span className="text-secondary rem2" >Dubai</span>
                </div>
                <span style={{ fontSize: "16px" }}>
                  <img src={roomicon} alt="" srcset="" /> <span className="text-secondary"> {props.room}</span>
                </span>
                <span style={{ fontSize: "16px", marginLeft: '20px' }}>
                  <img src={bedicon} alt="" srcset="" /> <span className="text-secondary"> {props.bath}</span>
                </span>
                <div>       
                  <br />
                  <br />
                    <button href="#" class="houseorapt shadow" style={{width:'100%'}} >House</button>
        <br /><br />
        
        
                </div>


              </Card.Body>
            </Card>







          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Cards;
