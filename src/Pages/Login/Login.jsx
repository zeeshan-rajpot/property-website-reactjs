import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./login.css";
import Navbars from "../../Common/NavBar";
import loginimg from "../../images/shutterstock_1935754699 [Converted].png";
import logo from "../../images/Image 11.png";
import email from "../../images/Path 9028.png";
import password from "../../images/Group 9504.png";
import Facebookicon from "../../images/facebookicon.svg";
import gmailicon from "../../images/gmailicon.svg";
import Footer from "../../Common/Footer";

const Login = () => {
  return (
    <>
    <Navbars/>
      <Container >
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
              style={{ marginRight: "10px" , color:'black',  backgroundColor: "white" }}
            >
              Login
            </button>
            <button href="#" className="rent shadow" style={{backgroundColor: "#E1E1E1", borderColor:'#E1E1E1' , color:'#BABABA'}}>
              Sign Up
            </button>
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
            <buttun href="#" class="Continuebtn">
              Continue
            </buttun>
            <br />
            <br />
            <p className="text-secondary">Or Continue with</p>
            <img src={Facebookicon} alt="" srcset="" width={"100px"} />
            <img src={gmailicon} alt="" srcset="" width={"100px"} />
           
            
            <p className="text-secondary">
              Dummy text fill up have ratings on our platform. A ‘Book It Again’
              percentage score tells you how a event has performed
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

export default Login;
