import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Navbars from "../../Common/NavBar";
import loginimg from "../../images/shutterstock_1935754699 [Converted].png";
import logo from "../../images/Image 11.png";
import emailIcon from "../../images/Path 9028.png";
import passwordIcon from "../../images/Group 9504.png";
import FacebookIcon from "../../images/facebookicon.svg";
import GmailIcon from "../../images/gmailicon.svg";
import Footer from "../../Common/Footer";
import BottomBar from "../../Common/BottomNavBar";
import { baseurl } from "../Const";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a payload object with user credentials
    const payload = {
      email,
      password,
    };

    // Send the login request to the API
    axios.post(`${baseurl}/loginUser`, payload)
      .then((response) => {
        if (response.status === 200) {
          // Save the token to local storage
          localStorage.setItem('authToken', response.data.token);
          // Redirect to the home page
          navigate("/home");
          // Display the congratulatory message with an emoji
          alert("Congratulations! User is logged in now. 🎉");
        } else {
          // Handle the case when login is unsuccessful
          // Display an error message or take appropriate action
          alert("Login unsuccessful. Please check your credentials and try again.");
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the login request
        console.log("Error:", error);
        // Display an error message or take appropriate action
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <Navbars />
      <BottomBar />
      <Container>
        <Row className="loginrow">
          <Col lg={4} className="text-center bgimg">
            <img src={logo} alt="" />
            <h3>
              <b> Welcome Back</b>
            </h3>
            <p className="text-secondary">
              Welcome Back, Please enter Your Details
            </p>

            <Link to="/Login" className="buy mr-2 shadow" style={{ marginRight: "10px", color: "black", backgroundColor: "white" }}>
              Login
            </Link>
            <Link to="/Signup" className="rent shadow" style={{ backgroundColor: "#E1E1E1", borderColor: "#E1E1E1", color: "#BABABA" }}>
              Sign Up
            </Link>
            <br />
            <br />
            <img src={emailIcon} alt="" />
            <input type="text" placeholder="Email" className="ms-2" value={email} onChange={handleEmailChange} />
            <br />
            <br />
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" className="ms-2" value={password} onChange={handlePasswordChange} />
            <br />
            <br />
            <button href="#" className="Continuebtn" onClick={handleSubmit}>
              Continue
            </button>
            <br />
            <br />
            <p className="text-secondary">Or Continue with</p>
            <img src={FacebookIcon} alt="" width={"100px"} />
            <img src={GmailIcon} alt="" width={"100px"} />


            <p className="text-secondary">
              Dummy text fill up have ratings on our platform. A ‘Book It Again’
              percentage score tells you how an event has performed
            </p>
          </Col>
          <Col lg={8} className="d-flex itemcenter">
            <img src={loginimg} alt="" className="loginimg" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
