import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./login.css";
import Dropdownbtn from "../../Pages/Home Page/Dropdownbtn";

import loginimg from "../../images/shutterstock_1935754699 [Converted].png";
import logo from "../../images/Image 11.png";
import email from "../../images/Path 9028.png";
import password from "../../images/Group 9504.png";
import nameicon from "../../images/noun-profile-5657081.svg";
import cityicon from "../../images/noun-city-3922352.svg";
import Footer from "../../Common/Footer";
import Navbars from "../../Common/NavBar";
const Signup = () => {
  return (
    <>
      <Navbars />
      <Container>
        <Row className="loginrow">
          <Col lg={4} className="text-center bgimg">
            <img src={logo} alt="" srcset="" />
            <h3>
              <b> Welcome Back</b>
            </h3>
            <p className="text-secondary">
              Welcome Back, Please enter Your Details
            </p>

            <button
              href="#"
              className="buy mr-2"
              style={{ marginRight: "10px" }}
            >
              Login
            </button>
            <button href="#" className="rent ">
              Sign Up
            </button>
            <br />
            <br />
            <img src={nameicon} alt="" srcset="" />
            <input type="text" placeholder="Name" className="ms-2" />
            <br />
            <br />
            <img src={email} alt="" srcset="" />
            <input type="text" placeholder="Email" className="ms-2" />
            <br />
            <br />
            <img src={password} alt="" srcset="" />
            <input type="Password" placeholder="Password" className="ms-2" />
            <br />
            <br />
            <img src={password} alt="" srcset="" />
            <input
              type="Password"
              placeholder="Confrim Password"
              className="ms-2"
            />
            <br />
            <br />
            <div className="d-flex">
            <img src={cityicon} alt="" srcset="" />
            <Dropdownbtn
                    title="Area (sqft)"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                  </div>
            <br />
            <br />
            <buttun href="#" class="Continuebtn">
              Continue
            </buttun>
            <br />
            <br />
          </Col>
          <Col lg={8} className=" d-flex itemcenter">
            <img src={loginimg} alt="" srcset="" className="loginimg " />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
