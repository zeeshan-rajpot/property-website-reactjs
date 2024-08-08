import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios
import { baseurl } from '../Const';
import './SignUpOption.css';
import Sourcer from './Sourcer';
import Investor from './Investor';

export const SignUpOption = ({ formData }) => {
  const { name, email, password, country, selectedCity } = formData;
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [userType, setUserType] = useState(''); // New state variable to store user type
  const [investorId, setInvestorId] = useState(''); // State variable to store the investorId
  const navigate = useNavigate();
  useEffect(() => {
    if (userType !== '') {
      // Call the postDataToAPI function only when userType is not an empty string
      postDataToAPI();
    }
  }, [userType]);

  const handleSourceModalOpen = () => {
    setShowSourceModal(true);
    setUserType('sourcer'); // Set the user type to 'sourcer' when clicking on the "Source" button
  };

  const handleSourceModalClose = () => {
    setShowSourceModal(false);
  };

  const handleInvestModalOpen = () => {
    setShowInvestModal(true);
    setUserType('investor'); // Set the user type to 'investor' when clicking on the "Invest" button
  };

  const handleInvestModalClose = () => {
    setShowInvestModal(false);
  };

  // Function to post the form data to the API
  const postDataToAPI = () => {
    const data = {
      name,
      email,
      password,
      country,
      city: selectedCity,
      type: userType, // Use the userType state variable to pass the correct type to the API
    };

    console.log('Data:', data);
    axios.post(`${baseurl}/createUser`, data)
    .then(response => {
      // Handle the API response if needed
      console.log('API Response:', response.data);

      // Assuming the response contains the ID after successful signup
      const receivedInvestorId = response.data._id; // Replace 'investorId' with the actual key used in the API response

      setInvestorId(receivedInvestorId); // Store the received ID in the state variable
   
      if (response.status === 200) {
        if (userType === 'sourcer') {
          handleSourceModalOpen();
        } else if (userType === 'investor') {
          handleInvestModalOpen()
        }
      }

    })
    
    .catch(error => {
      // Handle errors if the API request fails
      console.error('API Error:', error.response.data);

      navigate("/Signup");
      if (error.response && error.response.status === 409) {
        alert(JSON.stringify(error.response.data.message));
        // window.location.href = '/Signup';
        navigate("/Signup");
      }
    });
};

  return (
    <>
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <span className="fw-bold display-6">Let's Help you get</span>
            <span className="fw-bold display-6" style={{ color: '#EC6337' }}>
              Inprop
            </span>
          </Col>
        </Row>
        <Row>
          <h1 className="display-6 mt-4">Are You Looking Too?</h1>
        </Row>
        <Row>
          <Button className="Source display-6 mt-4 shadow text-decoration-none" onClick={handleSourceModalOpen}>
          Sourcer
          </Button>
          <Button className="Invest display-6 mt-4 mb-5 shadow text-decoration-none" onClick={handleInvestModalOpen}>
          Investor
          </Button>
        </Row>
      </Container>

      {/* Source Modal */}
      <Modal show={showSourceModal} onHide={handleSourceModalClose} style={{ width: '100%' }}>
        {/* Add your source component JSX here */}
        <Modal.Body>
          <Sourcer />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSourceModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Invest Modal */}
      <Modal show={showInvestModal} onHide={handleInvestModalClose}>

        <Modal.Body>
          <Investor 
          // investorId={investorId}
           />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleInvestModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// export default SignUpOption
