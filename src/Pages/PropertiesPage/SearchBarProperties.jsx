import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SearchBarProperties.css";
import houseicon from "../../images/Group 1249.svg";
import Dropdownbtn from "../Home Page/Dropdownbtn";
import moneyicon from "../../images/finance-icon.svg";
import bedicon from "../../images/Component 24 – 1.svg";
import searchimg from "../../images/17dd779b09de28b993c60163f6497ba0.svg";
import fillter from '../../images/funnel-icon.svg'

const SearchBarProperties = () => {
  return (
    <div>
      <Container className="SearchBarProperties shadow " style={{paddingLeft:'30px'}}> 
        <Row>
          <Col lg={2} sm={6} className="searchbarcolflex d-flex">
            <img className="searchicon" src={searchimg} alt="" srcset=""  style={{ marginLeft: "0" }}  />
            <input
              type="text"
              placeholder="City,Community or Building"
              className="ms-2"
              style={{
                border: "none",
                background: "none",
                // paddingBottom: "10px",
              }}
            />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
            {" "}
            <img className="searchicon"  src={houseicon} alt="" srcset=""  style={{ marginLeft: "0" }}  />
            <Dropdownbtn
              title="Property Type"
              option1="option1"
              option2="option1"
              option3="option1"
              option4="option1"
            />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
          <img className="searchicon" src={bedicon} alt="" srcset=""  style={{ marginLeft: "0px" }}  />
                  <Dropdownbtn
                    title="Beds & Baths"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
          <img  className="searchicon" src={moneyicon} alt="" srcset=""   style={{ marginLeft: "0" }}  />
                  <Dropdownbtn
                    title="Prize"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
          <img  className="searchicon" src={fillter} alt="" srcset=""   style={{ marginLeft: "0" }} />
                  <Dropdownbtn
                    title="Fillter"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
          </Col>
          <Col lg={2} md={6} className="searchbarcolflex text-center" style={{justifyContent:'center'}}>
          <button href="#" class="Find">Find</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBarProperties;
