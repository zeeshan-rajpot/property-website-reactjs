import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AgentCard.css'
import Carousel from "react-grid-carousel";
import AgentCard from '../../Pages/Home Page/AgentCard'
import Agent1img from '../../images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.svg'
import Agent2img from '../../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.svg'
import Agent3img from '../../images/bruce-mars-8YG31Xn4dSw-unsplash.svg'
import Agent4img from '../../images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.svg'
import Agent5img from '../../images/austin-distel-h1RW-NFtUyc-unsplash.svg'

const AgentCrousel = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col lg={3}>
            <h1 className="rem3">Meet the</h1>
            <h1 className="rem4" style={{color:'#EC6337' , fontWeight:'800'}}>Super Agents</h1>
          </Col>
          <Col lg={9}>
            <p className="rem2">
              Over 10,000 venues have ratings on our platform. A ‘Book It Again’
              percentage score tells you how a event has performed in the past.
              Over 10,000 venues have ratings on our platform. A ‘Book It Again’
              percentage score tells you how a venue has.
            </p>
          </Col>
        </Row>
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <AgentCard
              path={Agent1img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent2img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent3img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent4img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent5img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent1img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent2img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent3img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent4img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent5img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent1img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent2img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent3img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent4img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>
          <Carousel.Item>
            <AgentCard
              path={Agent5img}
              Name='Mazin Chahin'
              designation='Renaissance Real Estate'
            />
          </Carousel.Item>

         

          
        </Carousel>
      </Container>
    </>
  );
};

export default AgentCrousel;
