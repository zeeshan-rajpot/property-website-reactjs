import React from "react";

import Carousel from "react-grid-carousel";

// import Card from "react-bootstrap/Card";
import Cards from "./Carouseltem";
import { Container, Row, Col } from "react-bootstrap";

// import

const BuyPropertiesCard = () => {
  return (
    <>
      <Container>
        
        <Row>
          <Col>
            <h2 style={{ fontSize:'2rem' , color: "#FC780B" ,fontWeight:'600' }}>New Everyday</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-secondary" style={{fontSize:'2rem'}}>New properties for Buy</p>
          </Col>
        </Row>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="House"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="Apartments"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="House"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1543579596-2c11997c7706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="Apartments"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="House"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="Apartments"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="House"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1543579596-2c11997c7706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="Apartments"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="House"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="Apartments"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="House"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path='https://images.unsplash.com/photo-1543579596-2c11997c7706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80'
              price="500$"
              location="P.O Box 39975 , Dubai ,Emirates"
              room="1"
              bath="1"
              houseorapt="Apartments"
            />
          </Carousel.Item>


          
        </Carousel>
      </Container>
    </>
  );
};

export default BuyPropertiesCard;
