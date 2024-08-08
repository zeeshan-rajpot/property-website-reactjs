import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section3Home.css";
import houseimg from "../../images/Path 7812.svg";

const Section3Home = () => {
  return (
    <>
      <div className="section3div margin3sectiontop dektopview">
        <Container >
          <Row className={"marginweb mobilehieghtsection3"} style={{ height: "60vh" ,paddingBottom:'50px'}}>
            <Col lg={5} className="HerosectionCol">
              <h2 className="readyheading" style={{paddingTop:'50px' }}>
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
              <p className="text-secondary  mobiletextsection3" style={{fontSize:'18px'}}>
                Text fill up..... have ratings on our platform. A ‘Book It
                Again’ percentage score tells you how a event has performed in
                the past. Over 10,000 venues have ratings on our platform.
              </p>
              <p className="text-secondary mobiletextsection3" style={{fontSize:'18px'}}>
                A ‘Book It Again’ percentage score tells you how a venue has
                performed in the past.
              </p>
            </Col>
          </Row>
        </Container>
      </div>



{/* mobile view */}
<div className="section3div margin3sectiontop mobilecard">
        <Container className="ps-4">
          <Row className={"marginweb mobilehieghtsection3"} style={{ height: "60vh" ,paddingBottom:'50px'}}>
            <Col lg={5} className="HerosectionCol">
              <h5 className="readyheading" style={{paddingTop:'50px' , fontSize:'21px'}}>
                <b style={{color:'#FC780B'}}>Ready</b>{" "}
              </h5>

              <p style={{fontSize:'18px'}}>to setup your next Home?</p>

             
            </Col>
            <Col lg={1} className="HerosectionCol  mobile-disply-none">
              <img src={houseimg} />
            </Col>
            <Col lg={6} className="HerosectionCol  ">
              <p className="text-secondary  mobiletextsection3 pe-2 text-justify" style={{fontSize:'18px' ,textAlign:'justify'}}>
                Text fill up..... have ratings on our platform. A ‘Book It
                Again’ percentage score tells you how a event has performed in
                the past. Over 10,000 venues have ratings on our platform.
             
            
                A ‘Book It Again’ percentage score tells you how a venue has
                performed in the past.
                </p>
              <p>
                <a className="Learnbtn">Learn More</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>



    </>
  );
};

export default Section3Home;
