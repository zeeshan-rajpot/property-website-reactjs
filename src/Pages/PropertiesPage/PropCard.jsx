import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./propcard.css";
import { Link } from "react-router-dom";
import bedicon from "../../images/bedicon.svg";
import broom from "../../images/broom.svg";
import broom2 from "../../images/broom.svg";
import bottomline from "../../images/bottomline.svg";
import location from "../../images/location.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import Whatsapp from "../../images/Component 26 – 1.svg";
import vdots from "../../images/vdot.svg";
// import dot from "../../images/dot.svg";
// import ractangle from "../../images/rectangle.svg";
import New from "../../images/Component 26 – 1.png";
// import HeartBtn from "./RadioBtn.jsx";


const PropCard = (props) => {
  return (
    <>
      <Container>
        <Row className="my-5 shadow " style={{borderRadius:'50px'}}>
          <Col md={6} style={{paddingLeft:'0'}}>
            <div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "10px",
                  marginLeft: "5.7rem",
                }}
              >
                <img src={New} alt="" />
              </div>
              {/* <div
                className="heartbtn"
                style={{
                  position: "absolute",
                  marginTop: "15px",
                }}
              >
                <HeartBtn />
              </div> */}
              
              <Link to={`/DetailPage/${props.id}`}>
                <img
                  className="w-100 border"
                  height={"350px"}
                  src={props.image}
                  alt=""
                  style={{borderRadius:'50px' , objectFit:'contain'}}
                />
              </Link>
             
            </div>

            <div
              style={{ position: "absolute", top: "63px", marginLeft: "28rem" }}
            >
              {/* <img src={circle} alt="" /> */}
            </div>
          </Col>

          <Col md={6}>
            <Row className="my-4  ">
              <Col md={7} >
                <div>
                  <h5 className=" my-3 rem3" style={{ color: "#BABABA" }}>
                    {props.title}
                  </h5>
                </div>
                <Row className="my-4 rem2">
                  <Col>
                    <p style={{ fontSize: "11px", color: "#BABABA" }}>
                      City View <span className="mx-2 fw-bold">|</span>{" "}
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="rem2"
                      style={{ fontSize: "11px", color: "#BABABA" }}
                    >
                      Furnished<span className="mx-3 fw-bold">|</span>{" "}
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="rem2"
                      style={{ fontSize: "11px", color: "#BABABA" }}
                    >
                      Flexible Terms{" "}
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col sm={5}>
                <div
                  className="border pe-2 me-2 shadow-sm my-3"
                  style={{ borderRadius: "200px" }}
                >
                  <h5
                    className=" text-center my-3 fw-bold rem2"
                    style={{ color: "#EC6337" }}
                  >
                   {props.price} AED/year
                  </h5>
                  <p
                    className=" text-center rem3"
                    style={{ fontSize: "12px", color: "#EC6337" }}
                  >
                    {props.timetolist}
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="my-4">
              <Col>
                <div>
                  <img src={bedicon} alt="" />{" "}
                  <span className="mx-2 " style={{ color: "#BABABA" ,fontSize:'16px' }}>
                    {props.bedroom} bedroom
                  </span>{" "}
                </div>
              </Col>
              <Col>
                <div>
                  <img src={broom} alt="" />{" "}
                  <span className="mx-2 " style={{ color: "#BABABA" ,fontSize:'16px' }}>
                {props.bathroom} bathroom
                  </span>{" "}
                </div>
              </Col>
              <Col>
                <div>
                  <img src={broom2} alt="" />{" "}
                  <span className="mx-2 " style={{ color: "#BABABA" ,fontSize:'16px' }}>
                   {props.area} sqft
                  </span>{" "}
                </div>
              </Col>

              <Col lg={12}>
               <hr  style={{ color:'rgb(236, 99, 55)'  , border:'2px solid #ec6337'}}/>
              </Col>
              <Col lg={12}>
                <div>
                  <img src={location} alt="" />{" "}
                  <span
                    className="mx-3 rem2"
                    style={{ color: "#BABABA", fontSize: "13px" }}
                  >
                    {props.location}
                  </span>{" "}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <img src={phone} alt="" />{" "}
                  <span
                    style={{ fontSize: "12px", color: "#BABABA" }}
                    value={"zzz@gmail.com"}
                  >
                    phone
                  </span>{" "}
                </div>
              </Col>
              <Col>
                <div>
                  <img src={email} alt="" />{" "}
                  <span style={{ fontSize: "12px", color: "#BABABA" }}>
                    email
                  </span>{" "}
                </div>
              </Col>
              <Col>
                <div>
              
                  <img src={Whatsapp} alt="" />{" "}
                  <span style={{ fontSize: "12px", color: "#BABABA" }} >
                    Whatsapp
                  </span>
             
                  {" "}
                </div>
              </Col>
              <Col>
                <div>
                  <img src={vdots} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PropCard;