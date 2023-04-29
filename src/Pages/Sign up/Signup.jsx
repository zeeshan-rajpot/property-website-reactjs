import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./login.css";
import Dropdownbtn from "../../Pages/Home Page/Dropdownbtn";
import { Link } from "react-router-dom";

import loginimg from "../../images/shutterstock_1935754699 [Converted].png";
import logo from "../../images/Image 11.png";
import email from "../../images/Path 9028.png";
import password from "../../images/Group 9504.png";
import nameicon from "../../images/noun-profile-5657081.svg";
import cityicon from "../../images/noun-city-3922352.svg";
import Footer from "../../Common/Footer";
import Navbars from "../../Common/NavBar";
import SignupQ from "./SignupQ";
import Signupdropdownbtn from "./Signupdropdownbtn";

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
              className="buy mr-2 shadow"
              style={{ marginRight: "10px" ,backgroundColor: "#E1E1E1", borderColor:'#E1E1E1' , color:'#BABABA'}}
            >
              Login
            </button>
            <button href="#" className="rent shadow" style={{ color:'black',  backgroundColor: "white" }} >
              Sign Up
            </button>
            <br />
            <br />
            <img src={nameicon} alt="" srcset="" />
            <input
              type="text"
              placeholder="Name"
              className="ms-2"
              style={{ width: "280px" }}
            />
            <br />
            <br />
            <img src={email} alt="" srcset="" />
            <input
              type="text"
              placeholder="Email"
              className="ms-2"
              style={{ width: "280px" }}
            />
            <br />
            <br />
            <img src={password} alt="" srcset="" />
            <input
              type="Password"
              placeholder="Password"
              className="ms-2"
              style={{ width: "280px" }}
            />
            <br />
            <br />
            <img src={password} alt="" srcset="" />
            <input
              type="Password"
              placeholder="Confrim Password"
              className="ms-2"
              style={{ width: "280px" }}
            />
            <br /> 
            <br />
            <div
              className="d-flex"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <img src={cityicon} alt="" srcset="" />
              <Signupdropdownbtn />
            </div>
            <br />
            <br />
            <Link to="/SignupQ" className="Continuebtn">
              Continue
            </Link>
            <br />
            <p className="rem1">or</p>
            <br />
            <p>
              Already have an account?{" "}
              <span style={{ color: "#EC6337" }}> Sign In </span>
            </p>
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
