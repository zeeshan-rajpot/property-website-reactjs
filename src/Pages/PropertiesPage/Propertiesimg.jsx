import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PropertiesImg.css";

import ExampleImg from "./Example";

const Propertiesimg = () => {
  return (
  
<>
  
  
  <Container style={{ marginTop: "12vh" }} className="dektopview">
      <Row>
        <Col>
        <h1
      className='mt-4 '
      style={{
        fontSize: '20px',
        background: 'linear-gradient(to right, #fff,#d1d9db)',
        padding: '10px',
        color: 'black',
        width: '35%',
        borderRadius: '22px',
        marginLeft: '10px',
      }}
    >
      Discover Your Best
      <span
        style={{
          color: 'rgb(252, 120, 11)',
        }}
      >
        {' '}
        House
      </span>{' '}
      Here
    </h1>

    
<p
        className='my-0'
        style={{
          textAlign: 'left',
          fontSize: '15px',
          color: '#c7c7c7',
          marginRight: '54px',
          marginLeft: '20px',
          marginBottom:'20px'
        }}
      >
        Text fill up rooms perfect for laid-back meet-ups to corporate
        boardrooms made for wowing potential clients. We’ve got your meeting
        room hire needs covered
      </p>
        </Col>
      </Row>
      {/*       
          <Row>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg position-relative"
          style={{ alignItems: "end" }}
        >
          <ExampleImg img={img1} text="Appartment" number="153"  className="marginb20" />
          <ExampleImg img={img2} text="Penthouses"  number="17" />
        </Col>
        <Col xs={12} lg={4} className="dflexincol  PropertiesMobileImg">
       
          <ExampleImg img={img3} text="hhhhhhhhhhhh"  />
        </Col>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg"
          style={{ alignItems: "Start" }}
        >
     <ExampleImg img={img4} text="Penthouses" number="166"  className="marginb20" />
          <ExampleImg img={img5} text="hhhhhhhhhhhh"  />
        </Col>
      </Row> */}


      <Row>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg position-relative "
          style={{ alignItems: "end" }}
        >
          <div className="mobileviewimgproperty img-wrapper">

            <img className="marginb20 PropertyPageImgLeft img-responsive" src="https://images.unsplash.com/photo-1652180076195-9b4c82e390a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="Image 1" />
            <div className="img-overlay">
              <span className="iamgeabovetext">House</span>
            </div>
          </div>
          <div className="mobileviewimgproperty img-wrapper">

            <img className=" PropertyPageImgLeft img-responsive" src="https://plus.unsplash.com/premium_photo-1661962680724-d926ef951cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1YmFpJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 1" />
            <div className="img-overlay">
              <span className="iamgeabovetext">Appartment</span>
            </div>
          </div>

        </Col>

        <Col xs={12} lg={4} className="dflexincol  PropertiesMobileImg ">
          <div className="img-wrapper">
            <img className="PropertyPageImgCenter" src="https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Big Image" />
            <div className="img-overlay">
              <span className="iamgeabovetext">Building</span>
            </div>

          </div>
        </Col>
        <Col
          lg={4}
          className="dflexincol PropertiesMobileImg"
          style={{ alignItems: "Start" }}
        >
          <div className="img-wrapper">
            <img src="https://images.unsplash.com/photo-1556284664-800b14d70a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGR1YmFpJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 3" className="marginb20 PropertyPageImgRight" />
            <div className="img-overlay">
              <span className="iamgeabovetext">Flats</span>
            </div>

          </div>
          <div className="img-wrapper">
            <img className="PropertyPageImgRight" src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 4" />
            <div className="img-overlay">
            <span className="iamgeabovetext">Room</span>
          </div>
          
          </div>

        </Col>
      </Row>




    </Container>

{/* mobile view */}
<div  className="mobileblock" style={{marginTop:'190px'}}>
<h1
      className='mt-4 '
      style={{
        fontSize: '4vw',
        background: 'linear-gradient(to right, #fff,#d1d9db)',
        padding: '10px',
        color: 'black',
        width: '62%',
        borderRadius: '22px',
        marginLeft: '10px',
      }}
    >
      Discover Your Best
      <span
        style={{
          color: 'rgb(252, 120, 11)',
        }}
      >
        {' '}
        House
      </span>{' '}
      Here
    </h1>
<p
        className='my-0'
        style={{
          textAlign: 'left',
          fontSize: '2.6vw',
          color: '#c7c7c7',
          marginRight: '54px',
          marginLeft: '20px',
        }}
      >
        Text fill up rooms perfect for laid-back meet-ups to corporate
        boardrooms made for wowing potential clients. We’ve got your meeting
        room hire needs covered
      </p>
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}
    >
      <div
        style={{
          height: '155px',
          flex: 1,
          paddingRight: '2px',
          marginLeft: '20px',
        }}
      >
        <img
          src='https://images.unsplash.com/photo-1610526662877-4d0382ea9a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=289&q=80'
          alt='Image 1'
          style={{
            width: '100%',
            height: '70px',
            objectFit: 'cover',
            borderRadius: '15px 0 0 15px',

            
          }}
        />

        <h1
          className='mt-4'
          style={{
            fontSize: '1.5vw',
            background:
              'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
            padding: '7px',
            color: '#fff',
            width: '66px',
            borderRadius: '0px 15px 15px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            height: '20px',

            transform: 'translateY(-36px) translateX(0px)',
            margin: '0',
            marginBottom:'4px'
          }}
        >
          Penthouses
          <span
            style={{
              position: 'absolute',
              right: '12px',
              fontSize: '1.5vw',
            }}
          >
            13
          </span>
        </h1>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src='https://images.unsplash.com/photo-1516069429726-51d80d545cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=901&q=80'
            alt='Image 2'
            style={{
              width: '100%',
              height: '70px',
              marginTop: '-36px',
              objectFit: 'cover',
              borderRadius: '15px 0 0 15px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: '4px 27px 3px 3px',
              color: 'white',
              borderTopRightRadius: '15px',
              borderBottomRightRadius: '15px',
              marginTop:'20px'
            }}
          >
            <h1
              className='mt-4 mb-4'
              style={{
                fontSize: '1.5vw',
                background:
                  'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
                padding: '6px 0px 0px 0px',
                color: '#fff',
                width: '66px',
                borderRadius: '0px 15px 15px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                height: '20px',

                transform: 'translateY(19px) translateX(-3px)',
              }}
            >
              Penthouses
              <span
                style={{
                  position: 'absolute',
                  right: '12px',
                  fontSize: '1.5vw',
                }}
              >
                13
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 2,
          // padding: '0 5px',
          display: 'block',
          // marginLeft: '52px',
          height: '155px',
        }}
      >
        <img
          src='https://plus.unsplash.com/premium_photo-1678963248671-29ce42a16899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=462&q=80'
          alt='Image 3'
          style={{
            width: '87%',
            // height: 'auto',
            margin: '0 auto',
            objectFit: 'cover',
            height:'143px',
            borderRadius:'12px'
          }}
        />
        <h1
          className='mt-4 mb-4'
          style={{
            fontSize: '1.5vw',
            background:
              'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
            padding: '7px',
            color: '#fff',
            width: '66px',
            borderRadius: '0px 15px 15px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            height: '20px',

            transform: 'translateY(-36px) translateX(0px)',
          }}
        >
          Penthouses
          <span
            style={{
              position: 'absolute',
              right: '12px',
              fontSize: '1.5vw',
            }}
          >
            13
          </span>
        </h1>
      </div>

      <div style={{ height: '155px', flex: 1, paddingRight: '5px' }}>
        <img
          src='https://images.unsplash.com/photo-1445853583881-f3bb64d99025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80yy'
          alt='Image 1'
          style={{
            width: '100%',
            height: '70px',
            objectFit: 'cover',
            borderRadius: '0 15px 15px 0px',
            marginLeft: '-21px',
            marginBottom:'10px'
          }}
        />
        <h1
          className='mt-4 '
          style={{
            fontSize: '1.5vw',
            background:
              'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
            padding: '7px',
            color: '#fff',
            width: '66px',
            borderRadius: '0px 15px 15px 0px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            height: '20px',

            transform: 'translateY(-44px) translateX(-22px)',
          }}
        >
          Penthouses
          <span
            style={{
              position: 'absolute',
              right: '12px',
              fontSize: '1.5vw',
            }}
          >
            13
          </span>
        </h1>
        <img
          src='https://images.unsplash.com/photo-1516069429726-51d80d545cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=901&q=80'
          alt='Image 2'
          style={{
            width: '100%',
            height: '70px',
            marginTop: '-46px',
            objectFit: 'cover',
            borderRadius: '0 15px 15px 0px',
            marginLeft: '-21px',
          }}
        />
        <h1
          className='mt-4 mb-4'
          style={{
            fontSize: '1.5vw',
            background:
              'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
            padding: '7px',
            color: '#fff',
            width: '66px',
            borderRadius: '0px 15px 15px 0px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            height: '20px',

            transform: 'translateY(-36px) translateX(-22px)',
          }}
        >
          Penthouses
          <span
            style={{
              position: 'absolute',
              right: '12px',
              fontSize: '1.5vw',
            }}
          >
            13
          </span>
        </h1>
      </div>
    </div>
    </div>
</>
  );
};

export default Propertiesimg;
