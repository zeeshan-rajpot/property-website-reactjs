import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SearchBarProperties.css";
import houseicon from "../../images/Group 1249.svg";
import Dropdownbtn from "../Home Page/Dropdownbtn";
import moneyicon from "../../images/finance-icon.svg";
import bedicon from "../../images/Component 24 – 1.svg";
import searchimg from "../../images/17dd779b09de28b993c60163f6497ba0.svg";
import fillter from '../../images/funnel-icon.svg'


const SearchBarProperties = () => {
  return (
    <>
    <div className="" style={{minWidth:'100VW' }}>
      <Container className="SearchBarProperties shadow dektopview " style={{paddingLeft:'30px'}}> 
        <Row>
          <Col lg={2} sm={6} className="searchbarcolflex d-flex">
            <img className="searchicon" src={searchimg} alt="" srcset=""  style={{ marginLeft: "0" }}  />
            <input
              type="text"
              placeholder="City,Community or Building"
              className="ms-2"
              style={{
                border: "none",
                background: "none",
                // paddingBottom: "10px",
              }}
            />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
            {" "}
            <img className="searchicon"  src={houseicon} alt="" srcset=""  style={{ marginLeft: "0" }}  />
            <Dropdownbtn
              title="Property Type"
              option1="option1"
              option2="option1"
              option3="option1"
              option4="option1"
            />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
          <img className="searchicon" src={bedicon} alt="" srcset=""  style={{ marginLeft: "0px" }}  />
                  <Dropdownbtn
                    title="Beds & Baths"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
          <img  className="searchicon" src={moneyicon} alt="" srcset=""   style={{ marginLeft: "0" }}  />
                  <Dropdownbtn
                    title="Prize"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
          </Col>
          <Col lg={2} sm={6} className="searchbarcolflex ">
          <img  className="searchicon" src={fillter} alt="" srcset=""   style={{ marginLeft: "0" }} />
                  <Dropdownbtn
                    title="Fillter"
                    option1="option1"
                    option2="option1"
                    option3="option1"
                    option4="option1"
                  />
          </Col>
          <Col lg={2} md={6} className="searchbarcolflex text-center" style={{justifyContent:'center'}}>
          <button href="#" class="Find">Find</button>
          </Col>
        </Row>
      </Container>
    </div>


{/* mobile view */}














<Container style={{ width: '93%', borderRadius: '31px' , background:'white'}} className="shadow  pt-3 pb-5 mobileblock">

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
          <option value=''>fillter</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </select>
        <img src={fillter} alt='Search' className='input-icon' style={{ width: '32px', height: '21px' }} />
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

export default SearchBarProperties;
