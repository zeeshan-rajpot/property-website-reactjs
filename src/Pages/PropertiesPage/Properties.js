import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropCard from './PropCard';
import MobilePropertyCard from './MobilePropertyCard';
import { Link } from 'react-router-dom';
import './properties.css'; // Import the CSS file for styling

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8222/getAllProperty')
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
      <div className="desktop-properties">
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

      {/* MobilePropertyCard will be shown only on mobile view */}
      <div className="mobile-properties">
        {properties.length > 0 ? (
          properties.map((property) => (
            <MobilePropertyCard
              key={property._id}
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
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </>
  );
};

export default Properties;
