import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoimg from "../../images/Mask Group 1.svg";
import './featured.css'

const Featured = () => {
    return (
        <>
            <Container style={{marginTop:'50px'}}>
                <Row>
                    <Col md={4} className='shadow pt-5 text-center pb-4' >
                        <img src={logoimg} />
                        <h1 className=' pt-4 bold ' style={{ fontWeight: '800 ', fontSize: '30px' }}>Effortiess UA at Scale</h1>
                        <h4 className='h3 pt-4 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat soluta reiciendis doloribus rerum quia architecto velit similique eum laboriosam?
                        </h4>

                    </Col>
                    <Col md={4} className='shadow pt-5 fw-bolder text-center pb-4'>
                        <img src={logoimg} />
                        <h1 className='bold pt-4' style={{ fontWeight: '800 ', fontSize: '30px' }}>Acess over 4,0000 Vetted creators</h1>
                        <h4 className='h3 pt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat soluta reiciendis doloribus rerum quia architecto velit similique eum laboriosam?
                        </h4>

                    </Col>
                    <Col md={4} className='shadow pt-5  text-center pb-4'>
                        <img src={logoimg} />
                        <h1 className='pt-4' style={{ fontWeight: '800 ', fontSize: '30px' }}> 200k+ Properties listed in website</h1>
                        <h4 className='h3 pt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat soluta reiciendis doloribus rerum quia architecto velit similique eum laboriosam?
                        </h4>


                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Featured