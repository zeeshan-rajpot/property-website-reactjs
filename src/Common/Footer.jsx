import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import Facebooksvg from '../images/facebook.svg'
import instagramSvg from '../images/instagram.svg'
import twitter from '../images/twitter.svg'


export default function Footer() {
  return (
    <div bgColor="light" className="text-center text-lg-start text-muted dektopview">
      

      <section className="bgimage">
        <Container className="text-center text-md-start mt-5 text-start">
          <Row className="mt-3">
            <Col md="3" lg="3" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 p text-start" style={{fontSize:'18px'}}>Company</h6>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">About Us </a>
              </p>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">How it works</a>
              </p>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">Event Partners </a>
              </p>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">Blog</a>
              </p>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">Careers</a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 p text-start " style={{fontSize:'18px'}}>Support</h6>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">Help Cente</a>
              </p>
             
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">Security</a>
              </p>
              <p className="p text-start" style={{fontSize:'14px'}}>
                <a className="text-reset ">Support</a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 p text-start" style={{fontSize:'18px'}}>Useful links</h6>
             <img src={Facebooksvg} alt="" srcset=""  />
             <img src={instagramSvg} alt="" srcset=""  className="marginright"/>
             <img src={twitter} alt="" srcset=""  className="marginright"/>
             <br />
             <br />
          
           
            </Col>

            <Col md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
             
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="pp mr-1 marginright">
                Ⓒ 2023 Inprop Holdings Inc. All rights reserved.
              </span>
              <span className='pp mr-1 marginright'>+1 617-300-0956 </span>
              <span className='pp marginright'>Terms of Service</span> <span className='pp mr-1 marginright'> Privacy Policy</span>
            </Col>
          </Row>
        </Container>
      </section>

      
    </div>
  );
}
