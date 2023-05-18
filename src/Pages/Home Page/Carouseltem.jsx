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
                className="boderradius"
              />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex">
                  <span className="h1" style={{ fontSize: "20px" }}>
                   {props.price}
                  </span>
                  <button href="#" class="houseorapt"style={{marginLeft:'45%'}}>{props.houseorapt}</button>
                  </div>
                </Card.Title>
                <Card.Text>{props.location}</Card.Text>
                <span style={{ fontSize: "16px" }}>
                  <img src={roomicon} alt="" srcset="" /> {props.room}
                </span>
                <span style={{ fontSize: "16px" }}>
                  <img src={bedicon} alt="" srcset="" /> {props.bath}
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
