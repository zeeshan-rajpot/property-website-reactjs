import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Cards from "./Carouseltem";
import { Container, Row, Col } from "react-bootstrap";
import { baseurl } from "../Const";

const BuyPropertiesCard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`${baseurl}/getAllProperty`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontSize: "2rem", color: "#FC780B", fontWeight: "600" }}>New Everyday</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-secondary" style={{ fontSize: "2rem" }}>New properties for Buy</p>
          </Col>
        </Row>
        <Carousel cols={3} rows={1} gap={3} loop>
          {properties.map((property) => (
            <Carousel.Item key={property.id}>
        
              <Link to={`/DetailPage/${property._id}`}>
                <Cards
                  path={property.propertyImages[0]}
                  price={property.price}
                  location={property.address}
                  room={property.bedroom}
                  bath={property.bathroom}
                  houseorapt={property.category}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <Cards/> */}
      </Container>
    </>
  );
};

export default BuyPropertiesCard;
