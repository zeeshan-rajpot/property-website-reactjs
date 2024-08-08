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
      <Container className="shadow desktopcard" style={{ borderRadius: '43px', marginTop: '50px' }}>
        <Row>
          <Col lg={6} className="float-left" style={{paddingLeft:'0' }}>
            <img src={props.img} width={'100%'} height={'300px'} style={{borderRadius:'50px'}} alt="" srcset="" />
          </Col>
          <Col lg={3} sm={6} style={{ lineHeight: '20px' }} className='d-flex align-items-start  justify-content-center  flex-column '>
            <h3 className=' font-bold' style={{ color: '#EC6337' ,fontSize:'25px' }}>Delivery Date: {props.delivrydate}</h3>
            <h4 className="rem2 text-secondary">Project</h4>
            <h4 className='rem3 font-bold'>{props.projectname}</h4>
            <h4 className="rem2 text-secondary">Developer</h4>
            <h4 className='rem3 font-bold'>{props.devlporename}</h4>
            <div className='mt-2  d-flex align-items-center'>
              <img src={bedicon} alt="" />{' '}
              <span className="  mx-2" style={{ color: '#BABABA' ,fontSize:'16px' }}>
                {props.bedroom}  bedroom
              </span>{' '}
            </div>
            <div className='mt-2  d-flex align-items-center'>
              <img src={broom} alt="" />{' '}
              <span className="rem2 mx-2" style={{ color: '#BABABA' ,fontSize:'16px'}}>
                {props.bathroom}  bathroom
              </span>{' '}
            </div>
            <div className='mt-2  d-flex align-items-center'>
              <img src={broom2} alt="" />{' '}
              <span className="rem2 mx-2" style={{ color: '#BABABA'  ,fontSize:'16px'}}>
                {props.area}  sqft
              </span>{' '}
            </div>
            <div className='mt-2 d-flex align-items-center '>
                  <img src={location} alt="" width='14px'/>{" "}
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









      <div className='Property shadow mobileview' width='100%'>
      <div
        className='img1'
        style={{
          width: '45%',
          borderRadius: '15px 15px 15px 15px',
        }}
      >
        <img
        src={props.img}
          style={{
            width: '100%',
            height: ' 146px',
            borderRadius: ' 15px 15px 15px 15px ',
          }}
        />
      </div>
      <div
        className='data'
        style={{
          marginLeft: '10px',
          width: '30%',
          height: '146px',
        }}
      >
        <h6
          style={{
            marginTop: '5px', // Added marginTop
            color: '#FC780B',
            fontWeight: '400',
          }}
        >
          Delivery Date: {props.delivrydate}
        </h6>
        <p
          style={{
            marginTop: '-4px', // Added marginTop
            color: '#979797',
          }}
        >
          Project
        </p>
        <h6
          style={{
            marginTop: '-15px', // Added marginTop
            color: 'rgba(0, 0, 0, 0.9)',
          }}
        >
          {props.projectname}
        </h6>
        <p
          style={{
            marginTop: '-6px', // Added marginTop
            color: '#979797',
          }}
        >
          Developer
        </p>
        <h6
          style={{
            marginTop: '-15px', // Added marginTop
            color: 'rgba(0, 0, 0, 0.9)',
          }}
        >
      {props.devlporename}
        </h6>
        <div style={{ marginTop: '-1px' }}>
          <img style={{ height: '10px' }} src={bedicon} alt='Image 1' />
          <span
            style={{
              fontSize: '2.1vw',
              marginLeft: '2px',
              color: 'rgba(151, 151, 151, 0.7)',
            }}
          >
            {props.bedroom} bedrooms
          </span>
        </div>
        <div style={{ marginTop: '-8px' }}>
          <img style={{ height: '10px' }} src={location} alt='Image 2' />
          <span
            style={{
              fontSize: '2.1vw',
              marginLeft: '12px',
              color: 'rgba(151, 151, 151, 0.7)',
            }}
          >
           {props.area}sqft
          </span>
        </div>
        <div style={{ marginTop: '-8px' }}>
          <img style={{ height: '10px' }} src={broom} alt='Image 3' />
          <span
            style={{
              fontSize: '2.1vw',
              marginLeft: '8px',
              color: 'rgba(151, 151, 151, 0.7)',
            }}
          >
            {props.bathroom} bathrooms
          </span>
        </div>
        <div style={{ marginTop: '-8px' }}>
          <img style={{ height: '10px' }} src={location} alt='Image 4' />
          <span
            style={{
              fontSize: '2.1vw',
              marginLeft: '10px',
              color: 'rgba(151, 151, 151, 0.7)',
            }}
          >
          {props.location}
          </span>
        </div>
      </div>

      <div
        className='img2'
        style={{
          width: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          // className='shadow'
          src={map}
          style={{
            width: '100%', // Adjust the size of the circular image
            height: '100%', // Adjust the size of the circular image
            borderRadius: '50%',
          }}
        />
      </div>
    </div>

      
    </>
  );
};

export default ProjectCard;
