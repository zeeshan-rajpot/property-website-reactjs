import React from "react";
import "./Herosection.css";
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/Mask Group 1.png";
import Houseimgmobile from '../../images/houseimgmobile.svg'

const HeroSection = () => {
  return (
    <>
      <Container className="dektopview" >
        <Row className={"Herosection"}>
          <Col lg={6} className="HerosectionCol" style={{ marginTop: '55px' }}>
            <h1 className="h1" style={{ color: '#FC780B' }}>Your Home  Finder </h1>

            <p style={{ width: '90%', color: '#707070' }} >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum, ipsa ea illo cum minus vero labore cupiditate molestiae
              provident quaerat, quam exercitationem adipisci perspiciatis,
              earum quas voluptates ex odit sunt debitis. Non quo obcaecati
              nisi. Eius, quisquam ipsum.
            </p>
          </Col>
          <Col lg={6} className="HerosectionCol" style={{ alignItems: 'center' }}>
            <img
              src={houseimg}
              alt=""
              className="HerosectionImg"
              srcset=""
              width={"800px"}
            // height={"700px"}

            />
          </Col>
        </Row>
      </Container>







{/* mobile view */}




      <div
        className='mt-4 mb-4 mobileview'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '4.6vw',
              color: 'rgb(252, 120, 11)',
            }}
          >
            Your Home <span style={{ fontWeight: 600 }}>Finder</span>
          </h1>
          <p
          className="text-secondary"
            style={{
              fontSize: '2.7vw',
            }}
          >
            Lorem, ipsum dolor sit amet  consectetur <br /> adipisicing elit.
            Eveniet
            laborum, ipsa <br /> ea illo
            cum minus vero labore     <br />  cupiditate
            molestiae
          </p>
          <button
            style={{
              backgroundColor: '#fff',
              borderRadius: '28px',
              border: '1px solid #fc780c',
              cursor: 'pointer',
              color: '#fc780c',
              fontFamily: 'Arial',
              fontSize: '10px',
              padding: '5px 10px',
              textDecoration: 'none',
              textShadow: '0px 1px 0px #fc780c',
              width: '60%',
            }}
          >
            Find Out More
          </button>
        </div>
        <div
          style={{
            paddingRight: '25%',
          }}
        >
          <img
            style={{
              width: '59vw',
              position: 'absolute',
              // height: '200%',
              right: '0',
             top:'64px'
              // marginRight: '-471px',
            }}
            src={Houseimgmobile}
            alt='png'
          />
        </div>
      </div>




    </>
  );
};

export default HeroSection;
