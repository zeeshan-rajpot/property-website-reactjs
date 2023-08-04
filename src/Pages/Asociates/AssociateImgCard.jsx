import React from "react";
import "./AssociateImg.css";
import { Col } from "react-bootstrap";
// import { Button } from 'react-bootstrap'

const AssociateImgCard = (props) => {
  return (
    <>
    
      <Col  style={{ lineHeight: "10px" }}>
        <span href="#" class="Name">
          {" "}
          <p>{props.name}</p>
          <p style={{ color: "#BABABA" }}>{props.designation}</p>
          <hr />
          <p style={{ color: "#BABABA" }}>
            Nationality :
            <span style={{ color: "black" }}> {props.location}</span>
          </p>
          <p style={{ color: "#BABABA" }}>
            Languages :
            <span style={{ color: "black" }}> {props.language} </span>{" "}
          </p>
          <hr />
          <p>
            For Sale :<span style={{ color: "#EC6337" }}>  {props.numberofproperties}</span>
          </p>
        </span>
      </Col>
    </>
  );
};

export default AssociateImgCard;
