import React , { useEffect, useState } from "react";

import Carousel from "react-grid-carousel";

// import Card from "react-bootstrap/Card";
import Cards from "./Carouseltem";
import { Container, Row, Col } from "react-bootstrap";

// import

const BuyPropertiesCard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8222/getAllProperty')
      .then(response => response.json())
      .then(data => {
        setProperties(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
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
          {properties.map(property => (
            <Carousel.Item key={property.id}>
              <Cards
                path={property.propertyImages[0]}
                price={property.price}
                location={property.address}
                room={property.bedroom}
                bath={property.bathroom}
                houseorapt={property.category}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default BuyPropertiesCard;



// import React, { useEffect, useState } from "react";
// import Carousel from "react-grid-carousel";
// import Cards from "./CarouselItem";
// import { Container, Row, Col } from "react-bootstrap";

// const BuyPropertiesCard = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetch('https://example.com/api/properties')
//       .then(response => response.json())
//       .then(data => {
//         setProperties(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <>
//       <Container>
//         <Row>
//           <Col>
//             <h2 style={{ fontSize: '2rem', color: "#FC780B", fontWeight: '600' }}>New Everyday</h2>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <p className="text-secondary" style={{ fontSize: '2rem' }}>New properties for Buy</p>
//           </Col>
//         </Row>
//         <Carousel cols={3} rows={1} gap={10} loop>
//           {properties.map(property => (
//             <Carousel.Item key={property.id}>
//               <Cards
//                 path={property.image}
//                 price={property.price}
//                 location={property.location}
//                 room={property.room}
//                 bath={property.bath}
//                 houseorapt={property.houseorapt}
//               />
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>
//     </>
//   );
// };

// export default BuyPropertiesCard;
