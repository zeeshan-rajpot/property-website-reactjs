import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUpOption.css';
import Sourcer from './Sourcer';
import Investor from './Investor';

export const SignUpOption = () => {
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showInvestModal, setShowInvestModal] = useState(false);

  const handleSourceModalOpen = () => {
    setShowSourceModal(true);
  };

  const handleSourceModalClose = () => {
    setShowSourceModal(false);
  };

  const handleInvestModalOpen = () => {
    setShowInvestModal(true);
  };

  const handleInvestModalClose = () => {
    setShowInvestModal(false);
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
            Source
          </Button>
          <Button className="Invest display-6 mt-4 mb-5 shadow text-decoration-none" onClick={handleInvestModalOpen}>
            Invest
          </Button>
        </Row>
      </Container>

      {/* Source Modal */}
      <Modal show={showSourceModal} onHide={handleSourceModalClose} style={{width:'100%'}}>
        {/* Add your source component JSX here */}
        <Modal.Body>
         <Sourcer/>
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
<Investor/>
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
