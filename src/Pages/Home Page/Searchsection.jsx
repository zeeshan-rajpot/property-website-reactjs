import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Searchsection.css";

const SearchSection = () => {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={2}
          className="col-full-height justify-content-center text-center"
        >
          <div className="d-flex justify-content-center text-center flexsection">
            <button href="#" className="buy mr-2" style={{marginRight:'10px'}}>
              buy
            </button>
            <button href="#" className="rent ">
              buy
            </button>
          </div>
        </Col>

        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} sm={12} className="justify-content-center text-center">
              <Row>
                <Col lg={3} sm={12}>
                  Column 1 (Row 1)
                </Col>
                <Col lg={3} sm={12}>
                  Column 2 (Row 1)
                </Col>
                <Col lg={3} sm={12}>
                  Column 3 (Row 1)
                </Col>
                <Col lg={3} sm={12}>
                  Column 4 (Row 1)
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} className="justify-content-center text-center">
              <Row>
                <Col lg={3} sm={12}>
                  Column 5 (Row 2)
                </Col>
                <Col lg={3} sm={12}>
                  Column 6 (Row 2)
                </Col>
                <Col lg={3} sm={12}>
                  Column 7 (Row 1)
                </Col>
                <Col lg={3} a sm={12}>
                  Column 8 (Row 1)
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          md={2}
          className="col-full-height justify-content-center text-center"
        >
          Column 2
        </Col>
      </Row>
    </Container>
  );
};

export default SearchSection;
