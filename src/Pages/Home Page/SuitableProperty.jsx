import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import houseimg from "../../images/Component 2 – 1.png";
import './Suitableproperty.css'

const SuitableProperty = () => {
  return (
<>
<Container>
        <Row className={"Herosection margintop-mobile marginweb"} >
          <Col lg={6} className="HerosectionCol section3text">
            <h3>Find Your <span style={{color:'#CCC462'}}> SuiteAble Property </span> Online Here</h3>

            <p style={{textAlign:'justify'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              laborum, ipsa ea illo cum minus vero labore cupiditate molestiae
              provident quaerat, quam exercitationem adipisci perspiciatis,
              earum quas voluptates ex odit sunt debitis. Non quo obcaecati
              nisi. Eius, quisquam ipsum. Nihil omnis exercitationem assumenda
              quidem hic. Recusandae dolor quo dolores dolorum?
            </p>
            <button href="#" class="Find-buttun">Find Out more</button>
          </Col>
          <Col lg={6} className="HerosectionCol  " style={{alignItems:'center'}}>
            <img
              src={houseimg}
              alt=""
              className="HerosectionImg"
              srcset=""
              width={"480px"}
              height={"480px"}

            />
          </Col>
        </Row>
      </Container>
</>
  )
}

export default SuitableProperty
