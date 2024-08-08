import React from "react";
import { Container, Image } from "react-bootstrap";
import "./PropertiesImg.css";

const ExampleImg = (props) => {
  return (
    <div>
      <div className="box" style={{ marginBottom: "20px" }}>
        <Image src={props.img} alt="Flying Kites" fluid />
        <div className="text" id="text">
          <h1>{props.text}</h1>
          <h1>{props.number}</h1>
        </div>
      </div>
    </div>
  );
};

export default ExampleImg;
