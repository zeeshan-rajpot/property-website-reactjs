import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropCard from './PropCard';
import MobilePropertyCard from './MobilePropertyCard';
import { Container ,Row ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './properties.css'; // Import the CSS file for styling
import { baseurl } from '../Const';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseurl}/getAllPropertyByUser`)
      .then((response) => {
        setProperties(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <div className='dektopview'>
      <Container style={{ marginTop: '20px' }}>

        <Row>
          <Col>
          <h1
                    className='mt-4 '
                    style={{
                        fontSize: '20px',
                        background: 'linear-gradient(to right, #fff,#d1d9db)',
                        padding: '10px',
                        color: 'black',
                        width: '58%',
                        borderRadius: '22px',
                        marginLeft: '10px',
                    }}
                >
                    Property for rent in
                    <span
                        style={{
                            color: 'rgb(252, 120, 11)',
                        }}
                    >
                        {' '}
                        Downtown Dubai
                    </span>{' '}
                    <span
                        style={{
                            color: 'rgb(252, 120, 11)',
                            fontSize: '20px',
                            paddingLeft: '14px',
                            marginTop: '4px',
                        }}
                    >
                        (3378 results)
                    </span>
                </h1>
                <p className='text-secondary my-0' style={{ marginLeft: '15px', fontSize: '15px', marginRight: '26px' }}> Text fill up rooms perfect for laid-back meet-ups to corporate boardrooms
                    made for wowing potential clients.</p>
          </Col>

        </Row>
      </Container>
      </div>
 


      

      {/* MobilePropertyCard will be shown only on mobile view */}
<div className='mobileblock'>
      <h1
                    className='mt-4 '
                    style={{
                        fontSize: '3.5vw',
                        background: 'linear-gradient(to right, #fff,#d1d9db)',
                        padding: '10px',
                        color: 'black',
                        width: '82%',
                        borderRadius: '22px',
                        marginLeft: '10px',
                    }}
                >
                    Property for rent in
                    <span
                        style={{
                            color: 'rgb(252, 120, 11)',
                        }}
                    >
                        {' '}
                        Downtown Dubai
                    </span>{' '}
                    <span
                        style={{
                            color: 'rgb(252, 120, 11)',
                            fontSize: '2vw',
                            paddingLeft: '14px',
                            marginTop: '4px',
                        }}
                    >
                        (3378 results)
                    </span>
                </h1>
                <p className='text-secondary my-0' style={{ marginLeft: '15px', fontSize: '2.6vw', marginRight: '26px' }}> Text fill up rooms perfect for laid-back meet-ups to corporate boardrooms
                    made for wowing potential clients.</p>
     {/* <MobilePropertyCard/> */}
     {/* <MobilePropertyCard/> */}
     {/* <MobilePropertyCard/> */}
     {/* <MobilePropertyCard/> */}
     </div>



     <div className="">
        {properties.map((property) => (
          // <Link to={`/DetailPage/${property._id}`} key={property._id}>
          <PropCard
            id={property._id}
            image={property.propertyImages[0]}
            title={property.title}
            price={property.price}
            timetolist={property.timetolist}
            bedroom={property.bedroom}
            bathroom={property.bathroom}
            area={property.area}
            location={property.address}
          />
          // </Link>
        ))}
      </div>
    </>
  );
};

export default Properties;
