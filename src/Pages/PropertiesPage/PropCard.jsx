import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./propcard.css";
import { Link } from "react-router-dom";
import bedicon from "../../images/bedicon.svg";
import broom from "../../images/broom.svg";
import broom2 from "../../images/broom.svg";
import bottomline from "../../images/bottomline.svg";
import location from "../../images/location.svg";
import area from '../../images/area.svg';
import email from "../../images/email.svg";
import Emailm from '../../images/message.svg';
import Whatsappm from '../../images/whtsapp.svg';
import phone from "../../images/phone.svg";
import Whatsapp from "../../images/Component 26 – 1.svg";
import vdots from "../../images/vdot.svg";
import call from '../../images/call.svg';
import Menu from '../../images/cardmenu.svg';
import bed from '../../images/bed.svg';
import bath from '../../images/bath.svg';
// import dot from "../../images/dot.svg";
// import ractangle from "../../images/rectangle.svg";
import New from "../../images/Component 26 – 1.png";
// import HeartBtn from "./RadioBtn.jsx";


const PropCard = (props) => {
  return (
    <>
      <Container className="desktop-properties">
        <Row className="my-5 shadow " style={{borderRadius:'50px'}}>
          <Col md={6} style={{paddingLeft:'0'}}>
            <div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "1px",
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
                  style={{borderRadius:'50px' }}
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
                  <img src={location} alt=""  style={{width:'10px'}}/>{" "}
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
























      <div className='mobileblock'>
              
              <div
                  style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '20px',
                      borderRadius: '15px',
                      backgroundColor: '#fff',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  }}
              >
                  <div
                      style={{
                          width: '41%',
                          height: '100%',
                          borderRadius: '15px 0 0 15px',
                      }}
                  >
                       <Link to={`/DetailPage/${props.id}`}>
                      <img
                          src={props.image}
                          alt='Image'
                          style={{
                              width: '100%',
                              height: '127px',
                              borderRadius: '15px 0 0 15px',
                          }}
                      />
                      </Link>
                      {/* <h1
        className='mt-4 mb-4'
        style={{
          fontSize: '1.5vw',
          background:
            'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
          padding: '7px',
          color: '#fff',
          width: '66px',
          borderRadius: '0px 15px 15px',
          backdropFilter: 'blur(2px)',
          position: 'relative',
          height: '20px',

          transform: 'translateY(-44px) translateX(0px)',
        }}
      >
        Apartments
        <span
          style={{
            position: 'absolute',
            right: '12px',
            fontSize: '1.5vw',
          }}
        >
          13
        </span>
      </h1> */}
                  </div>
                  <div
                      style={{
                          width: '75%',
                          height: '100%',
                      }}
                  >
                      <div>
                          <h2
                              style={{
                                  marginBottom: '0px',
                                  fontSize: '2.6vw',
                                  color: '#c7c7c7',
                                  marginLeft: '4px',
                                  marginTop: '10px'
                              }}
                          >
                          {props.title}
                          </h2>

                          <div
                              style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginTop: '-8px',
                              }}
                          >
                              <h5
                                  style={{
                                      marginBottom: '0px',
                                      fontSize: '1.7vw',
                                      color: '#c7c7c7',
                                      marginLeft: '4px',
                                      marginRight: '5px',
                                  }}
                              >
                                  City View
                              </h5>
                              <div
                                  style={{
                                      borderRight: '1px solid #c7c7c7',
                                      height: '10px',
                                      marginRight: '5px',
                                      marginTop: '0px',
                                  }}
                              ></div>
                              <h5
                                  style={{
                                      marginBottom: '0px',
                                      fontSize: '1.7vw',
                                      color: '#c7c7c7',
                                      marginRight: '5px',
                                  }}
                              >
                                  Another Heading
                              </h5>
                              <div
                                  style={{
                                      borderRight: '1px solid #c7c7c7',
                                      height: '10px',
                                      marginRight: '5px',
                                      marginTop: '0px',
                                  }}
                              ></div>
                              <h5
                                  style={{
                                      marginBottom: '0px',
                                      fontSize: '1.7vw',
                                      color: '#c7c7c7',
                                  }}
                              >
                                  Another Heading
                              </h5>
                              <button
                                  type='submit'
                                  className='shadow'
                                  style={{
                                      width: '27%',
                                      height: '37px',
                                      backgroundColor: 'rgb(255, 255, 255)',
                                      transform: 'translateX(12px) translateY(-13px)',
                                      border: 'transparent',
                                      fontSize: '8px',
                                      borderRadius: '15px 15px 0px 14px',
                                      color: '#FC780B',
                                  }}
                              >
                               
                               
                               
                               
                               
                               
                               
                               
                               
                      <b>         {props.price}     AED/year</b>
                                  {/* <br />{' '}
                                  <span
                                      style={{
                                          paddingLeft: '10px',
                                          fontSize: '12px',
                                      }}
                                  >
                                           {props.timetolist}
                                  </span> */}
                              </button>
                          </div>

                          <hr
                              style={{
                                  margin: '0',
                                  border: '1px solid #c7c7c7',
                                  width: '75%',
                                  marginTop: '-7px',
                              }}
                          />
                      </div>
                      <div>
                          <div
                              style={{
                                  display: 'flex',
                                  marginTop: '5px',
                                  // justifyContent: 'space-between',
                              }}
                          >
                              <div
                                  style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      // marginRight: '5px', // Add margin on the right
                                  }}
                              >
                                  <img src={bed} alt='bed' style={{ marginLeft: '5px' }} />
                                  <h2
                                      style={{
                                          fontSize: '1.7vw',
                                          color: '#c7c7c7',
                                          paddingTop: '9px',
                                          paddingLeft: '4px',
                                      }}
                                  >
                                     {props.bedroom} bedrooms
                                  </h2>
                              </div>
                              <div
                                  style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      paddingLeft: '9px', // Add margin on the right
                                  }}
                              >
                                  <img src={bath} alt='bath' style={{ marginLeft: '5px' }} />
                                  <h2
                                      style={{
                                          fontSize: '1.7vw',
                                          color: '#c7c7c7',
                                          paddingTop: '9px',
                                          paddingLeft: '4px',
                                      }}
                                  >
                                          {props.bathroom} bathrooms
                                  </h2>
                              </div>
                              <div
                                  style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      paddingLeft: '9px',
                                  }}
                              >
                                  <img src={location} alt='area' style={{ marginLeft: '5px' }} />
                                  <h2
                                      style={{
                                          fontSize: '1.7vw',
                                          color: '#c7c7c7',
                                          paddingTop: '9px',
                                          paddingLeft: '4px',
                                      }}
                                  >
                                         {props.area} sqft
                                  </h2>
                              </div>
                          </div>

                          <hr
                              style={{
                                  margin: '0',
                                  marginLeft: '5px',
                                  border: '1px solid #FC780B',
                                  width: '98%',
                              }}
                          />
                          <div style={{ display: 'flex' }}>
                              <img src={location} alt='location' style={{ marginLeft: '5px' }} />
                              <h3
                                  style={{
                                      fontSize: '1.7vw',
                                      color: '#c7c7c7',
                                      paddingTop: '9px',
                                      paddingLeft: '4px',
                                      fontFamily: 'Gilroy',
                                      fontSize: '7px',
                                      fontWeight: '300',
                                  }}
                              >
                                 {props.location}
                              </h3>
                          </div>
                          <div>
                              <div style={{ display: 'flex' }}>
                                  <div
                                      style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent:'center',
                                          paddingTop: '2px',
                                      }}
                                  >
                                      <img
                                          src={call}
                                          alt='call'
                                          style={{
                                              marginTop: '-10px',
                                          }}
                                      />
                                      <h6
                                      className="mb-3"
                                          style={{
                                              fontSize: '1.7vw',
                                              color: '#c7c7c7',
                                              // paddingTop: '9px',
                                              marginTop: '0px',
                                          }}
                                      >
                                          Call
                                      </h6>
                                  </div>
                                  <div
                                      style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                      }}
                                  >
                                      <img
                                          src={Emailm}
                                          alt='Email'
                                          style={{
                                              marginTop: '-10px',
                                          }}
                                      />
                                      <h6
                                      className="mb-3"
                                          style={{
                                              fontSize: '1.7vw',
                                              color: '#c7c7c7',
                                              marginTop: '0px',
                                          }}
                                      >
                                          Email
                                      </h6>
                                  </div>
                                  <div
                                      style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                      }}
                                  >
                                      <img
                                          src={Whatsappm}
                                          alt='whtsapp'
                                          style={{
                                              marginTop: '-10px',
                                          }}
                                      />
                                      <h6
                                      className="mb-3"
                                          style={{
                                              fontSize: '1.7vw',
                                              color: '#c7c7c7',
                                              marginTop: '0px',
                                          }}
                                      >
                                          Whatsapp
                                      </h6>
                                  </div>
                                  <div
                                      style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                      }}
                                  >
                                      <img
                                          src={Menu}
                                          alt='Menu'
                                          style={{
                                              marginTop: '-10px',
                                          }}
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>






    </>
  );
};

export default PropCard;