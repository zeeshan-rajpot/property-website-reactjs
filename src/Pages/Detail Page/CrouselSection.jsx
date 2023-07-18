import React from 'react'
import { useState, useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './CarsoulSection.css'
const CrouselSection = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8222/getProperty/${id}`)
      .then((response) => {
        setProperty(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  let slides = [
    <img src={property.propertyImages[0]} alt="1" style={{

    }} />,
    <img src={property.propertyImages[1]} alt="2"style={{
     
      width: 'auto',
      
    }} />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />];

  const callback = function (index) {

  }
  return (
    <>
      <Carousel slides={slides} autoplay={false} interval={5000} onSlideChange={callback} />
    </>
  )
}

export default CrouselSection





