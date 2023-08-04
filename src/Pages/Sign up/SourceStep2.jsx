import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SourceStep2 = ({ handleChoice }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    handleChoice('yes');
  };

  const handleNoClick = () => {
    navigate('/'); // Replace '/' with the desired home page route
  };

  return (
    <Container>
      <h1>Do you want to Upload Property ?</h1>
      <div className='text-center'>
      <Button variant="contained" color="primary" onClick={handleYesClick}>
        Yes
      </Button>
      <Button variant="contained" color="secondary" onClick={handleNoClick}>
        No
      </Button>
      </div>
    </Container>
  );
};

export default SourceStep2;
