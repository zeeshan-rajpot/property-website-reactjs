import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Searchsection.css";
import Dropdownbtn from "./Dropdownbtn";

import searchimg from "../../images/17dd779b09de28b993c60163f6497ba0.svg";
import houseicon from "../../images/Group 1249.svg";
import roomicon from "../../images/living-room-icon.png";
import bedicon from "../../images/Component 24 – 1.svg";
import locationicon from "../../images/office-address-icon.svg";
import moneyicon from "../../images/finance-icon.svg";
import foodicon from "../../images/breakfast-time-icon.svg";

const SearchSection = () => {
  return (
    <Container style={{}} className="searchcontainer">
      <Row>
        <Col
          xs={12}
          md={2}
          className="col-full-height justify-content-center text-center flexsection rentbuybtn"
        >
          <div className="d-flex justify-content-center text-center ">
            <button
              href="#"
              className="buy mr-3"
              style={{ marginRight: "10px", padding: "8px 24px" }}
            >
              buy
            </button>
            <button href="#" className="rent " style={{ padding: "8px 22px" }}>
              Rent
            </button>
          </div>
        </Col>

        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} sm={12} className="justify-content-center text-center">
              <Row className="justify-content-center text-center">
                <Col
                  lg={3}
                  sm={12}
                  className="searchbarcolflex"
                  style={{ paddingLeft: "20px" }}
                >
                  <img
                    src={searchimg}
                    alt=""
                    srcset=""
                    style={{ marginLeft: "33px" }}
                  />
                  <input
                    type="text"
                    placeholder="City, Community or Building"
                    className="ms-2"
                    style={{
                      border: "none",
                      background: "none",
                      paddingBottom: "10px",
                    }}
                  />
                </Col>
                <Col lg={3} sm={12} className="searchbarcolflex ">
                  <img src={houseicon} alt="" srcset="" />
                  <Dropdownbtn
                    title="Property Type"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                </Col>
                <Col lg={3} sm={12} className="searchbarcolflex ">
                  <img src={bedicon} alt="" srcset="" />
                  <Dropdownbtn
                    title="Beds & Baths"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                </Col>

                <Col lg={3} sm={12} className="searchbarcolflex ">
                  <img src={moneyicon} alt="" srcset="" />
                  <Dropdownbtn
                    title="Prize"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              sm={12}
              className="justify-content-center text-center"
              style={{ marginTop: "10px" }}
            >
              <Row>
                <Col
                  lg={3}
                  sm={12}
                  className="searchbarcolflex"
                  style={{ paddingLeft: "30px" }}
                >
                  <img
                    src={searchimg}
                    alt=""
                    srcset=""
                    style={{ marginLeft: "33px" }}
                  />
                  <input
                    type="text"
                    placeholder="e.g. Beach, Chiller Free"
                    className="ms-2"
                    style={{
                      border: "none",
                      background: "none",
                      paddingBottom: "10px",
                    }}
                  />
                </Col>
                <Col lg={3} sm={12} className="searchbarcolflex ">
                  <img src={roomicon} alt="" srcset="" />
                  <Dropdownbtn
                    title="All Furnishing"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                </Col>
                <Col lg={3} sm={12} className="searchbarcolflex ">
                  <img src={locationicon} alt="" srcset="" />
                  <Dropdownbtn
                    title="Area (sqft)"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                </Col>
                <Col lg={3} sm={12} className="searchbarcolflex ">
                  <img src={foodicon} alt="" srcset="" />
                  <Dropdownbtn
                    title="Amenities"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          md={2}
          className="col-full-height justify-content-center text-center searchbarcolflex rem2 searchbtn"
        >
          Search
        </Col>
      </Row>
    </Container>
  );
};

export default SearchSection;
