import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import houseimge from "../../images/Component 22 – 1.svg";
import './Suitableproperty.css'

const SuitableProperty = () => {
  return (
<>
<Container>
        <Row className={"Herosection margintop-mobile marginweb"} >
          <Col lg={6} className="HerosectionCol section3text">
            <h3 className='Sutiteableheading'>Find Your
               <br />
               <span style={{color:'#FC780B', fontWeight :'800'}}> SuiteAble Property </span>
               <br /> Online Here</h3>

            <p style={{width:'90%'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum, ipsa ea illo cum minus vero labore cupiditate molestiae
              provident quaerat, quam exercitationem adipisci perspiciatis,
              earum quas voluptates ex odit sunt debitis. Non quo obcaecati
              nisi. Eius, quisquam ipsum. 
            </p>
            <br />
            <br />
            <button href="#" class="Find-buttun">Find Out more</button>
            <br />
          </Col>
          <Col lg={6} className="HerosectionCol " style={{alignItems:'center'}}>
            <img
              src={houseimge}
              alt=""
              className="HerosectionImg"
              srcset=""
              width={"480px"}
             

            />
          </Col>
        </Row>
      </Container>
</>
  )
}

export default SuitableProperty
