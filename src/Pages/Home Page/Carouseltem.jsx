import React from "react";
import Carousel from "react-grid-carousel";
import "./CarouselItm.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import roomicon from "../../images/living-room-icon.png";
import bedicon from "../../images/Component 24 – 1.svg";

const Cards = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ overflow: "hidden" }}>
              <Card.Img
                variant="top"
                src={props.path}
                className="boderradius shadow"
              />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex">
                  <span className="h1" style={{ fontSize: "20px" , color:'#ec6337'}}>
                   {props.price}AED/year
                  </span>
                  <button href="#" class="houseorapt"style={{marginLeft:'15%'}}>House</button>
                  </div>
                </Card.Title>
                <Card.Text> <span style={{color:'#ec6337'}}>{props.location}</span></Card.Text>
                <span style={{ fontSize: "16px" }}>
                  <img src={roomicon} alt="" srcset="" /> <span style={{color:'#ec6337'}}> {props.room}</span>
                </span>
                <span style={{ fontSize: "16px" }}>
                  <img src={bedicon} alt="" srcset="" /> <span style={{color:'#ec6337'}}> {props.bath}</span>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
