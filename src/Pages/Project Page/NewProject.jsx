import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import houseimgs from "../../images/projectimg.png";
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'



// import "./Suitableproperty.css";
// import "./HomeSearchSection.css";
// import Devider from "./Devider";

const NewProject = () => {
  return (
    <>
      <div className="mobile-disply-none" style={{ height: "auto", marginTop: "10vh" }}>
        <Container>
          <Row
            className={"Herosection margintop-mobile marginweb"}
            style={{ marginTop: "10px", marginBottom: "20px" }}
          >
            <Col lg={6}>
              <h3 className="rem3">New Projects in UAE</h3>
              <p className="rem5" style={{ color: '#EC6337' }}>660</p>
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





      <div className="mobileblock" style={{marginTop:'30px'}}>

        {/* <h3 className="rem3">New Projects in UAE</h3> */}
        <span
      className='mt-4 mobileview '
      style={{
        fontSize: '20px',
        background: 'linear-gradient(to right, #fff,#d1d9db)',
        padding: '10px',
        color: 'black',
        width: 'auto',
        borderRadius: '22px',
        marginLeft: '10px',
      }}
    >
      New Projects in UAE
      <span
        style={{
          color: 'rgb(252, 120, 11)',
        }}
      >
      
        600
      </span>
      
    </span>

        <p className="mt-4 px-3  text-secondary mobileview" style={{fontSize:'15px'}}>Text fill up rooms perfect for laid-back meet ups to corporate boardrooms made for wowing potential clients. We’ve got your meeting room hire.</p>




        <div className="mobileview"
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
              src={img1}
              alt='Image 1'
              style={{
                width: ' 106%',
                height: '80px',
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

                transform: 'translateY(-35px) translateX(0px)',
                margin: '0',
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
                src={img2}
                alt='Image 2'
                style={{
                  width: ' 106%',
                  height: '89px',
                  marginTop: '-31px',
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
                }}
              >
                <h1
                  className='mt-4 mb-4'
                  style={{
                    fontSize: '1.5vw',
                    background:
                      'linear-gradient(to right, rgb(165 165 165 / 52%), rgb(153 153 153 / 52%))',
                    padding: '6px 4px 0px 0px',
                    color: '#fff',
                    width: '66px',
                    borderRadius: '0px 15px 15px',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    height: '20px',

                    transform: 'translateY(18px) translateX(-3px)',
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
              // src={img5}
              src='https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'
              alt='Image 3'
              style={{
                borderRadius: '15px',
                width: '75%',
                height: '180px',
                margin: '0 auto',
                objectFit: 'cover',
                marginLeft: '15px',
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

                transform: 'translateY(-44px) translateX(15px)',
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
              src={img1}
              alt='Image 1'
              style={{
                width: ' 106%',
                height: '83px',
                objectFit: 'cover',
                borderRadius: '0 15px 15px 0px',
                marginLeft: '-21px',
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
              src={img2}
              alt='Image 2'
              style={{
                width: ' 106%',
                height: '89px',
                marginTop: '-36px',
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

export default NewProject;
