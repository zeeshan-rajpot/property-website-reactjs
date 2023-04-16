import React from "react";

import Carousel from "react-grid-carousel";

// import Card from "react-bootstrap/Card";
import Cards from "./Carouseltem";
import { Container, Row, Col } from "react-bootstrap";
import firstimg from "../../images/wael-hneini-QJKEa9n3yN8-unsplash.svg";
import secontimg from "../../images/ahmed-aldaie-lVSrpZ-0B8o-unsplash.svg";
import thirdimg from "../../images/darcey-beau-q8D7WZc40eA-unsplash (1).svg";
import forthimg from "../../images/david-rodrigo-Fr6zexbmjmc-unsplash.svg";
import fiveimg from "../../images/faisal-manga-4NeuZU-ynnw-unsplash.svg";
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
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <Cards
              path={firstimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={secontimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={thirdimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={forthimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={fiveimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={firstimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={secontimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={thirdimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={forthimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={fiveimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={firstimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={secontimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={thirdimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={forthimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={fiveimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={firstimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={secontimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={thirdimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={forthimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={fiveimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={firstimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Cards
              path={secontimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={thirdimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={forthimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Cards
              path={fiveimg}
              city="dubai"
              location="dubai"
              properties="173 no of properties"
            />
          </Carousel.Item>

          
        </Carousel>
      </Container>
    </>
  );
};

export default BuyPropertiesCard;
