import React from "react";
import Carousel from "react-grid-carousel";
import "./CarouselItm.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const Cards = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <span
                className="blurbackground"
                style={{ position: "absolute", marginTop: "87%" }}
              >
                {props.properties}
              </span>
              <span
                className=" displayflexmobile blur"
                style={{
                  position: "absolute",
                  marginTop: "79%",
                  marginLeft: "7%",
                  color: "white",
                }}
              >
                <span className="location"> {props.location}</span>
                <span className="number"> 78</span>
              </span>
              <Card.Img
                variant="top"
                src={props.path}
                className="boderradius"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
