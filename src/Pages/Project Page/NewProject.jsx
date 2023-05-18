import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import houseimgs from "../../images/projectimg.png";
// import "./Suitableproperty.css";
// import "./HomeSearchSection.css";
// import Devider from "./Devider";

const NewProject = () => {
  return (
    <>
      <div  style={{ height: "auto", marginTop: "10vh" }}>
        <Container>
          <Row
            className={"Herosection margintop-mobile marginweb"}
            style={{  marginTop: "10px", marginBottom: "20px" }}
          >
           <Col lg={6}>
           <h3 className="rem3">New Projects in UAE</h3>
           <p className="rem5" style={{color:'#EC6337'}}>660</p>
           <p className="rem2 text-secondary">Text fill up rooms perfect for laid-back meet ups to corporate boardrooms made for wowing potential clients. We’ve got your meeting room hire. made for wowing potential clients. We’ve got your meeting room hire.</p>
           </Col>
            <Col
              lg={6}
              className="HerosectionCol  mobile-disply-none"
              style={{ alignItems: "start" }}
            >
                <img src={houseimgs} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewProject;
