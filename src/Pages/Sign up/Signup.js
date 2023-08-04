import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./login.css";
// import SignupQ from "./SignupQ";
import { SignUpOption } from "./SignUpOption";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import loginimg from "../../images/shutterstock_1935754699 [Converted].png";
import logo from "../../images/Image 11.png";

import Footer from "../../Common/Footer";
import Navbars from "../../Common/NavBar";

import Signupdropdownbtn from "./Signupdropdownbtn";
import './Modals.css'
import BottomBar from '../../Common/BottomNavBar'


function Signup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // Assuming you have a city selection component for the user to choose from.

    const handleContinueClick = () => {
      // Validation checks
      if (!name || !email || !password || !confirmPassword || !selectedCity || !country) {
        // Show alert if any of the required fields are missing
        alert("Please fill in all the required fields.");
        return;
      }
    
      if (password !== confirmPassword) {
        // Show alert if passwords do not match
        alert("Passwords do not match. Please try again.");
        return;
      }
      
      if (password.length  <=  8) {
        // Show alert if password is not 8 characters long
        alert("Password must be exactly 8 characters long. Please try again.");
        return;
      }
      // Regular expression to validate email format
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        // Show alert if email format is invalid
        alert("Invalid email format. Please enter a valid email address.");
        return;
      }
    
    // Log the form data to the console.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Selected City:", selectedCity);
    console.log("country:", country);

    // Open the modal
    setShow(true);

    // postDataToAPI();
  };



  return (
    <>
      <Navbars />
      <BottomBar />
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


            <Link to="/Login" className="buy mr-2 shadow"
              style={{
                marginRight: "10px",
                backgroundColor: "#E1E1E1",
                borderColor: "#E1E1E1",
                color: "#BABABA",
              }}>
              Login
            </Link>
            <Link to="/Signup" className="rent shadow"
              style={{ color: "black", backgroundColor: "white" }}>
              Sign Up
            </Link>
            <br />
            <br />
            <FontAwesomeIcon icon={faUser} style={{color: "#9e9e9e",fontSize:'20px'}} />
            <input
              type="text"
              placeholder="Name"
              className="ms-2"
              style={{ width: "280px" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#9e9e9e",fontSize:'20px'}} />

            <input
              type="text"
              placeholder="Email"
              className="ms-2"
              style={{ width: "280px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <FontAwesomeIcon icon={faLock} style={{color: "#9e9e9e",fontSize:'20px'}} />
            <input
              type="Password"
              placeholder="Password"
              className="ms-2"
              style={{ width: "280px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <FontAwesomeIcon icon={faLock} style={{color: "#9e9e9e",fontSize:'20px'}} />
            <input
              type="Password"
              placeholder="Confirm Password"
              className="ms-2"
              style={{ width: "280px" }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <br />
            <div
              className=""
              style={{ alignItems: "center", justifyContent: "center" }}
            >
            <FontAwesomeIcon icon={faGlobe} style={{color: "#9e9e9e",fontSize:'20px'}} />
          {/* Dropdown btn for city and country ?\ */}

          <input
              type="text"
              placeholder="Country"
              className="ms-2"
              style={{ width: "280px" }}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
               <br />
            <br />
            <FontAwesomeIcon icon={faCity} style={{color: "#9e9e9e",fontSize:'20px'}} />

             <input
              type="text"
              placeholder="City"
              className="ms-2"
              style={{ width: "280px" }}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            />

          
            </div>
            <br />
            <br />

            <button variant="primary" onClick={handleContinueClick} className="Continuebtn">
              Continue
            </button>


            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              className="centered-modal"
            >

              <Modal.Body>

                <SignUpOption formData={{ name, email, password, confirmPassword, selectedCity, country }}  />
              </Modal.Body>
            </Modal>
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
}

export default Signup;
