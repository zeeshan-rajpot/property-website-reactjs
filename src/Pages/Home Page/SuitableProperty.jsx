import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import houseimge from "../../images/Component 22 – 1.svg";
import './Suitableproperty.css'
import img1 from '../../images/20230330_BLOG_1680190026.png'
import img2 from '../../images/182822821.jpeg'
import img3 from '../../images/hand-presenting-model-house-home-loan-campaign-2048x1365.jpg'
import img4 from '../../images/solutions-electrical-contracting-projects-pql4zzgheynmdiiaz4dh46wte4czsisx9x90suvp8o.jpg'
import img5 from '../../images/Document.png'
import img6 from '../../images/hand-giving-key-real-estate-agent.jpg'


const SuitableProperty = () => {
  return (
    <>
      <br /><br />
      <Container>
        <Row className={"Herosection margintop-mobile marginweb dektopview"} >
          <Col lg={6} className="HerosectionCol section3text">
            <h3 className='Sutiteableheading'>Find Your
              <br />
              <span style={{ color: '#FC780B', fontWeight: '800' }}> SuiteAble Property </span>
              <br /> Online Here</h3>

            <p style={{ width: '90%' }}>
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
          <Col lg={6} className="HerosectionCol " style={{ alignItems: 'center' }}>
            <img
              src={houseimge}
              alt=""
              className="HerosectionImg prop"
              srcset=""
              width={"410px"}


            />
          </Col>
        </Row>
      </Container>













      {/* mobile view */}
      <div className='h1 mobilecard pb-5 pt-3' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <h1
          style={{
            fontSize: '4.4vw',
          }}
          className='h1'
        >
          Find Your{' '}
          <span
            style={{
              color: 'rgb(252, 120, 11)',
              fontWeight: 'bold',

            }}

          >
            {' '}
            Suitable Property{' '}
          </span>{' '}
          Online Here
        </h1>
        <p
        className='text-secondary'
          style={{
            fontSize: '3.2vw',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '15px',
            marginBottom: '20%',
          }}
        >
          <img
            src={img1}
            alt='img'
            className='shadow mt-4'
            style={{
              width: '100%',
              height: '110%',
              borderRadius: '17px',
            }}
          />
          <img
                  src={img2}
            className='shadow mt-4 '
            alt='img'
            style={{
              width: '100%',
              borderRadius: '17px',
              height: '110%',
            }}
          />
          <img
                   src={img3}
                         className='shadow mt-4'
            alt='img'
            style={{
              borderRadius: '17px',
              width: '100%',
              height: '110%',
            }}
          />
          <img
                   src={img4}
            alt='img'
            className='shadow mt-4'
            style={{
              width: '100%',
              height: '110%',
              borderRadius: '17px',
            }}
          />
          <img
                   src={img5}
            className='shadow mt-4 '
            alt='img'
            style={{
              width: '100%',
              borderRadius: '17px',
              height: '110%',
            }}
          />
          <img
           src={img6}
            className='shadow mt-4'
            alt='img'
            style={{
              borderRadius: '17px',
              width: '100%',
              height: '110%',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff',
              borderRadius: '28px',
              border: '1px solid #fc780c',
              cursor: 'pointer',
              color: '#fc780c',
              fontFamily: 'Arial',
              fontSize: '12px',
              padding: '5px 20px',
              textDecoration: 'none',
              // textShadow: '0px 1px 0px #fc780c',
              width: '48%',
            }}
          >
            Find Out More
          </button>
        </div>
      </div>

    </>
  )
}

export default SuitableProperty
