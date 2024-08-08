import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/Group 10600.svg";
import "./Suitableproperty.css";
import "./HomeSearchSection.css";
import Devider from "./Devider";

const HomeSearchSection = () => {
  return (
    <>
      <div className="bgimgchair dektopview" style={{ height: "65vh", marginTop: "5vh" }}>
        <Container>
          <Row
            className={"Herosection margintop-mobile marginweb"}
            style={{ height: "40vh", marginTop: "10px", marginBottom: "20px" }}
          >
            <Col lg={6} className="HerosectionCol section3text ps-5 textflexserchsection" style={{height: "65vh"}}>
              <h3 className="rem3">
                Home
                <span
                  className="rem3"
                  style={{ color: "#FC780B", fontWeight: "600" }}
                >
                  {" "}
                  Search{" "}
                </span>
                made easy
              </h3>

              <p style={{ textAlign: "strart" }}>
                Discover how we help you find your dream home
              </p>
              <div className="line"></div>
              <h3 className="rem3">
                Find your <span style={{ color: "#FC780B" ,fontWeight: "600" }}> SuperAgent</span>
              </h3>
              <p>
                The most responsive agents with up to date improved accuracy on
                the properties you are searching for.
              </p>
              <button href="#" class="Find-buttun">
                Find Out more
              </button>
            </Col>
            <Col
              lg={6}
              className="HerosectionCol  mobile-disply-none"
              style={{ alignItems: "end" }}
            ></Col>
          </Row>
        </Container>
      </div>







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
        className="bold"
          style={{
            fontSize: '4vw',
            fontWeight: "600" 
          }}
        >
          Home <span style={{ color: 'rgb(252, 120, 11)' ,fontWeight: "600"  }}> Search </span>
          made Easy
        </h1>
        <p
        className="text-secondary"
          style={{
            fontSize: '3.2vw',
          }}
        >
          Discover How we find Your dream Home
        </p>
        <hr style={{ width: '292px' }} />
        <h1
          style={{
            fontSize: '6vw',
            whiteSpace: 'nowrap',
          }}
        >
          Find Your{' '}
          <span
            style={{
              color: 'rgb(252, 120, 11)',fontWeight: "600" 
            }}
          >
            Super Agent{' '}
          </span>
        </h1>
        <p
        className="text-secondary"
          style={{
            fontSize: '2.7vw',
          }}
        >
         The most responsive agents with 
      up to date
      <br /> improved accuracy on  the properties <br /> you are searching 
        for.
        </p>

        <button
            style={{
              backgroundColor: '#fff',
              borderRadius: '28px',
              border: '1px solid #fc780c',
              cursor: 'pointer',
              color: '#fc780c',
              fontFamily: 'Arial',
              fontSize: '15px',
              padding: '5px 10px',
              textDecoration: 'none',
              textShadow: '0px 1px 0px #fc780c',
              width: '52%',
            }}
          >
            Find Out More
          </button>
      </div>
      {/* <div
        style={{
          paddingRight: '25%',
          paddingTop: '10%',
        }}
      >
        <img
          style={{
            width: '170%',
            height: '170%',
          }}
          src={houseimg}
          alt='png'
        />
      </div> */}

<div style={{position:'relative'}}>
  <img style={{position:'absolute', right:'0' , bottom:'-110px' }}   src={houseimg}
          alt='png' />
</div>


    </div>




    </>
  );
};

export default HomeSearchSection;
