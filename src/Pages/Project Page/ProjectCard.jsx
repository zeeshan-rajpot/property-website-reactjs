import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bedicon from '../../images/bedicon.svg';
import broom from '../../images/broom.svg';
import broom2 from '../../images/broom.svg';
import map from '../../images/Capture.svg';
import location from "../../images/location.svg";

const ProjectCard = (props) => {
  return (
    <>
      <Container className="shadow" style={{ borderRadius: '43px', marginTop: '50px' }}>
        <Row>
          <Col lg={6} className="float-left" style={{paddingLeft:'0' }}>
            <img src={props.img} width={'100%'} height={'400px'} style={{borderRadius:'50px'}} alt="" srcset="" />
          </Col>
          <Col lg={3} sm={6} style={{ lineHeight: '50px' }}>
            <h3 className=' font-bold' style={{ color: '#EC6337' ,fontSize:'25px' }}>Delivery Date: {props.delivrydate}</h3>
            <h4 className="rem2 text-secondary">Project</h4>
            <h4 className='rem3 font-bold'>{props.projectname}</h4>
            <h4 className="rem2 text-secondary">Developer</h4>
            <h4 className='rem3 font-bold'>{props.devlporename}</h4>
            <div>
              <img src={bedicon} alt="" />{' '}
              <span className="  mx-2" style={{ color: '#BABABA' ,fontSize:'16px' }}>
                {props.bedroom}  bedroom
              </span>{' '}
            </div>
            <div>
              <img src={broom} alt="" />{' '}
              <span className="rem2 mx-2" style={{ color: '#BABABA' ,fontSize:'16px'}}>
                {props.bathroom}  bathroom
              </span>{' '}
            </div>
            <div>
              <img src={broom2} alt="" />{' '}
              <span className="rem2 mx-2" style={{ color: '#BABABA'  ,fontSize:'16px'}}>
                {props.area}  sqft
              </span>{' '}
            </div>
            <div>
                  <img src={location} alt="" />{" "}
                  <span
                    className="mx-3 rem2"
                    style={{ color: "#BABABA", fontSize: "13px" }}
                  >
                    {props.location}
                  </span>{" "}
                </div>
          </Col>
          <Col lg={3} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={map} alt="" srcset="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectCard;
