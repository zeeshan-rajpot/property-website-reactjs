import React from 'react'
import CustomPagination from './Pagination'
import { Col, Container, Row } from 'react-bootstrap'
const PaginationContainer = () => {
  return (
    <div>
        <div style={{borderRadius:'20px'}}>
        <Container className='shadow pt-3 pb-3 rounded' >
            <Row style={{borderRadius:'20px'}}>
                <Col>
                <CustomPagination/>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default PaginationContainer
