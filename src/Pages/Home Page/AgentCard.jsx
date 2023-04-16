import React from 'react'
// import Carousel from "react-grid-carousel";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AgentCard = (props) => {
    return (
        <div>
          <Container>
            <Row>
              <Col>
                <Card>
                  
                  <Card.Img
                    variant="top"
                    src={props.path}
                    className="boderradius"
                  />
                  <br />
                  <button href="#" class="AgentName rem1">{props.Name}
                  <br />
                {props.designation}
                  </button>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };
    
    

export default AgentCard



