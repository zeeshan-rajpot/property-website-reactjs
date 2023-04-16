import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section3Home.css";
import houseimg from "../../images/Path 7812.svg";

const Section3Home = () => {
  return (
    <>
      <div className="section3div margin3sectiontop">
        <Container>
          <Row className={"   marginweb"} style={{ height: "60vh" }}>
            <Col lg={5} className="HerosectionCol">
              <h2 className="readyheading">
                <b>Ready</b>{" "}
              </h2>

              <p>to setup your next Home?</p>

              <p>
                <a className="Learnbtn">Learn More</a>
              </p>
            </Col>
            <Col lg={1} className="HerosectionCol  mobile-disply-none">
              <img src={houseimg} />
            </Col>
            <Col lg={6} className="HerosectionCol  ">
              <p className="text-secondary  p">
                Text fill up..... have ratings on our platform. A ‘Book It
                Again’ percentage score tells you how a event has performed in
                the past. Over 10,000 venues have ratings on our platform.
              </p>
              <p className="text-secondary p">
                A ‘Book It Again’ percentage score tells you how a venue has
                performed in the past.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Section3Home;
