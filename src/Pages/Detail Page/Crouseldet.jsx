import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { baseurl } from '../Const';
import { useParams } from 'react-router-dom';

const Crouseldet = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseurl}/getProperty/${id}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }
  // Get the first image URL from the propertyImages array
  // const firstImage = property.propertyImages[0];
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === property.propertyImages.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? property.propertyImages.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Container>
        <Row>
          <main>
            <div className='carousel'>
              <img
                src={property.propertyImages[currentIndex]}
                className='carousel-images shadow'
                alt='Carousel Image'
              />
              <div className='slide_direction'>
                <div className='left' onClick={handlePrevious} style={{backgroundColor:'white'}}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    style={{ color: '#EC6337', fontSize: '35px' }}
                  />
                </div>
                <div className='right' onClick={handleNext} style={{backgroundColor:'white'}}>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: '#EC6337', fontSize: '35px' }}
                  />
                </div>
              </div>
              <div className='indicator'>
                {property.propertyImages.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${currentIndex === index ? 'activee' : ''}`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </main>
          {/* Display key points of the current image */}
          <div className='key-points'>
            <p>{property.propertyImages[currentIndex].keyPoints}</p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Crouseldet;