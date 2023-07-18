import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SourceStep2 = ({ handleChoice }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    handleChoice('yes');
  };

  const handleNoClick = () => {
    navigate('/Login'); // Replace '/' with the desired home page route
  };

  return (
    <Container>
      <h1>Did you check the policy?</h1>
      <Button variant="contained" color="primary" onClick={handleYesClick}>
        Yes
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNoClick}>
        No
      </Button>
    </Container>
  );
};

export default SourceStep2;
