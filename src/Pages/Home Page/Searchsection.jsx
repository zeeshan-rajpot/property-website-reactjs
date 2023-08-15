import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Searchsection.css";
import Dropdownbtn from "./Dropdownbtn";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import searchimg from "../../images/17dd779b09de28b993c60163f6497ba0.svg";
import houseicon from "../../images/Group 1249.svg";
import roomicon from "../../images/living-room-icon.png";
import bedicon from "../../images/Component 24 – 1.svg";
import locationicon from "../../images/office-address-icon.svg";
import moneyicon from "../../images/finance-icon.svg";
import foodicon from "../../images/breakfast-time-icon.svg";
import Btnslection from "./Selectbtn";

const SearchSection = () => {
  return (
    <>
      <Container style={{}} className="searchcontainer dektopview">
        <Row>
          <Col
            xs={12}
            md={2}
            className="col-full-height justify-content-center text-center flexsection rentbuybtn  rem2"
          >
            Buy
          </Col>

          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} sm={12} className="justify-content-center text-center">
                <Row className="justify-content-center text-center">
                  <Col
                    lg={3}
                    sm={12}
                    className="searchbarcolflex "
                    style={{ paddingLeft: "0" }}
                  >
                    <img
                      src={searchimg}
                      alt=""
                      srcset=""
                      className="marginmobile"
                      style={{ marginLeft: "33px" }}
                    />
                    <input
                      type="text"
                      placeholder="City, Community or Building"
                      className="ms-2"
                      style={{
                        border: "none",
                        background: "none",
                        paddingBottom: "10px",
                        marginTop: '20px'
                      }}
                    />
                  </Col>
                  <Col lg={3} sm={12} className="searchbarcolflex ">
                    <img className="searchicon" src={houseicon} alt="" srcset="" style={{ marginLeft: "33px" }} />
                    <Dropdownbtn
                      title="Property Type"
                      option1="optio555555"
                      option2="option1"
                      option3="option1"
                      option4="option1"
                    />
                  </Col>
                  <Col lg={3} sm={12} className="searchbarcolflex ">
                    <img className="searchicon" src={bedicon} alt="" srcset="" style={{ marginLeft: "33px" }} />
                    <Dropdownbtn
                      title="Beds & Baths"
                      option1="option1"
                      option2="option1"
                      option3="option1"
                      option4="option1"
                    />
                  </Col>

                  <Col lg={3} sm={12} className="searchbarcolflex ">
                    <img className="searchicon" src={moneyicon} alt="" srcset="" style={{ marginLeft: "33px" }} />
                    <Dropdownbtn
                      title="Price"
                      option1="option1"
                      option2="option1"
                      option3="option1"
                      option4="option1"
                    />
                  </Col>
                </Row>
              </Col>

              <Col
                xs={12}
                sm={12}
                className="justify-content-center text-center"
                style={{ marginTop: "10px" }}
              >
                <Row>
                  <Col
                    lg={3}
                    sm={12}
                    className="searchbarcolflex"
                    style={{ paddingLeft: "0" }}
                  >
                    <img
                      src={searchimg}
                      alt=""
                      srcset=""
                      className="marginmobile"
                      style={{ marginLeft: "33px" }}
                    />
                    <input
                      type="text"
                      placeholder="e.g. Beach, Chiller Free"
                      className="ms-2"
                      style={{
                        border: "none",
                        background: "none",
                        paddingBottom: "10px",
                        marginTop: '20px'
                      }}
                    />
                  </Col>
                  <Col lg={3} sm={12} className="searchbarcolflex ">
                    <img className="searchicon" src={roomicon} alt="" srcset="" style={{ marginLeft: "33px" }} />
                    <Dropdownbtn
                      title="All Furnishing"
                      option1="option1"
                      option2="option1"
                      option3="option1"
                      option4="option1"
                    />
                  </Col>
                  <Col lg={3} sm={12} className="searchbarcolflex " >
                    <img className="searchicon" src={locationicon} alt="" srcset="" style={{ marginLeft: "33px" }} />
                    <Dropdownbtn
                      title="Area (sqft)"
                      option1="option1"
                      option2="option1"
                      option3="option1"
                      option4="option1"
                    />
                  </Col>
                  <Col lg={3} sm={12} className="searchbarcolflex ">
                    <img className="searchicon" src={foodicon} alt="" srcset="" style={{ marginLeft: "33px" }} />
                    <Dropdownbtn
                      title="Amenities"
                      option1="option1"
                      option2="option1"
                      option3="option1"
                      option4="option1"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            md={2}
            className="col-full-height justify-content-center text-center  rem2 searchbtn"
          >
            Search
          </Col>
        </Row>
      </Container>







      <br />
      <br /><br />

      {/* Serarch bar for mobile  */}


      <Container className="mobileblock">
        <h4 style={{ fontWeight: '600', marginRight: '10px', paddingLeft: '10px', paddingBottom: '10px' }}> Search Your Ideal Property</h4>
      </Container>
      <Container style={{ width: '93%', borderRadius: '31px' }} className="shadow  pt-3 pb-5 mobileblock">

        <Row style={{}}>

          <Col className="d-flex borderRightHieght">

            <div
              className='input-container'
              width='120px'
              style={{
                paddingRight: '18px',
              }}
            >
              <input
                type="text"
                placeholder="City, Community "
                className='input-with-icon text-secondary'
                style={{
                  paddingLeft: '42px',
                  backgroundColor: '#fff !important',
                  outline: 'none',
                }}
              />


              <img src={searchimg} alt='Search' className='input-icon' style={{ width: '32px', height: '21px' }} />
            </div>
          </Col>
          <Col className="d-flex align-center ">

            {/* <img className="" src={houseicon} alt="" width="24px" srcset="" style={{}} />
            <Dropdownbtn
              title="Property Type"
              option1="optio555555"
              option2="option1"
              option3="option1"
              option4="option1"
            /> */}
            <div
              className='input-container'
              width='120px'
              style={{
                paddingRight: '18px',
              }}
            >
              <select
                className='input-with-icon text-secondary'
                style={{
                  paddingLeft: '26px',
                  backgroundColor: '#fff !important',
                  outline: 'none',
                }}
              >
                <option value=''>Property Type</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
              </select>
              <img src={houseicon} alt='Search' className='input-icon' />
            </div>


          </Col>



          <Row>
            <Col className="d-flex borderRightHieght " style={{ paddingRight: '9px' }}>





              <div
                className='input-container'
                width='120px'
                style={{
                  paddingRight: '18px',
                }}
              >
                <input
                  type="text"
                  placeholder="Beach, Chiller Free "
                  className='input-with-icon text-secondary'
                  style={{
                    paddingLeft: '42px',
                    backgroundColor: '#fff !important',
                    outline: 'none',
                  }}
                />


                <img src={searchimg} alt='Search' className='input-icon' style={{ width: '32px', height: '21px' }} />
              </div>
            </Col>


            <Col className="d-flex align-center " style={{ padding: '2px' }}>
              <div
                className='input-container'
                width='120px'
                style={{
                  paddingRight: '9px',
                }}
              >
                <select
                  className='input-with-icon text-secondary'
                  style={{
                    paddingLeft: '42px',
                    backgroundColor: '#fff !important',
                    outline: 'none',
                  }}
                >
                  <option value=''>Price</option>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                </select>
                <img src={moneyicon} alt='Search' className='input-icon' style={{ width: '32px', height: '21px' }} />
              </div>

            </Col>

          </Row>

          <Row>
            <Col className="borderRightHieght" style={{ paddingLeft: '18px' }}>


              <div
                className='input-container'
                width='120px'
                style={{
                  paddingRight: '18px',
                }}
              >
                <select
                  className='input-with-icon text-secondary'
                  style={{
                    paddingLeft: '42px',
                    backgroundColor: '#fff !important',
                    outline: 'none',
                  }}
                >
                  <option value=''>Beds & Baths</option>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                </select>
                <img src={bedicon} alt='Search' className='input-icon' style={{ width: '41px' }} />
              </div>



            </Col>
            <Col>

              <div
                className='input-container'
                width='120px'

              >
                <select
                  className='input-with-icon text-secondary'
                  style={{
                    paddingLeft: '42px',
                    backgroundColor: '#fff !important',
                    outline: 'none',
                  }}
                >
                  <option value=''>Amenities</option>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                </select>
                <img src={foodicon} alt='Search' className='input-icon' style={{ width: '32px', height: '21px' }} />
              </div>

            </Col>
          </Row>








        </Row>
        <Row>
          <Col className="borderRightHieght pe-0 ">

            <div
              className='input-container'
              width='120px'
              style={{
                paddingRight: '18px',
                paddingLeft: '5px'
              }}
            >
              <select
                className='input-with-icon  text-secondary'
                style={{
                  paddingLeft: '42px',
                  backgroundColor: '#fff !important',
                  outline: 'none',
                }}

              >
                <option className="text-secondary" value=''  >
                  Area (sqft)
                </option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
              </select>
              <img src={locationicon} alt='Search' className='input-icon' style={{ width: '41px' }} />
            </div>

          </Col>


          <Col className="">

            <div
              className='input-container'
              width='120px'
              style={{
                paddingRight: '18px',
              }}
            >
              <select
                className='input-with-icon text-secondary'
                style={{
                  paddingLeft: '42px',
                  backgroundColor: '#fff !important',
                  outline: 'none',
                }}
              >
                <option value=''>All Furnishing</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
              </select>
              <img src={roomicon} alt='Search' className='input-icon' style={{ width: '31px', height: '24px' }} />
            </div>

          </Col>



        </Row>

        <Row style={{ marginLeft: '124px' }}>
          <Col
            xs={6}
            md={2}
            className="col-full-height justify-content-center text-center  rem2 searchbtn"
            style={{ textAlign: 'center', fontSize: '15px' }}
          >
            Search
          </Col>
        </Row>
      </Container>













    </>
  );
};

export default SearchSection;
