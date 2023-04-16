import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import pool from '../../images/pool.svg'
import hottub from '../../images/hottub.svg'
import paito from '../../images/paito.svg'
import pooltable from '../../images/pool table.svg'
import indoorfire from '../../images/indoorfirplace.svg'
import outdinning from '../../images/hottub.svg'
import bbqgrill from '../../images/bbqgrill.svg'
import exercise from '../../images/exercise.svg'
import firepit from '../../images/firepit.svg'
import kitchen from '../../images/kitchen.svg'

const Amenties = () => {
  return (
<>
<Container>
    <Row>
        <Col><h3 className='text-secondary'>Amenties</h3></Col>
    </Row>
    <Row className='justify-contant-center'>
        <Col><img src={pool} alt="" srcset="" /></Col>
        <Col><img src={hottub} alt="" srcset="" /></Col>
        <Col><img src={paito} alt="" srcset="" /></Col>
        <Col><img src={bbqgrill} alt="" srcset="" /></Col>
        <Col><img src={firepit} alt="" srcset="" /></Col>
        <br />
        <br />
        <br />
   <p className='mobiledispalynone'></p>
        <Col><img src={pooltable} alt="" srcset="" /></Col>
        <Col><img src={indoorfire} alt="" srcset="" /></Col>
        <Col><img src={exercise} alt="" srcset="" /></Col>
        <Col><img src={outdinning} alt="" srcset="" /></Col>
        <Col><img src={kitchen} alt="" srcset="" /></Col>
        
    </Row>
</Container>

</>
  )
}

export default Amenties
