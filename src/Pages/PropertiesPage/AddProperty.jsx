import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import Uploadproperty from './Uploadproperties'

const AddProperty = () => {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showAddproprtyModal, setShowAddproprtyModal] = useState(false);

  const handleAccountModalOpen = () => {
    setShowAccountModal(true);
  };

  const handleAccountModalClose = () => {
    setShowAccountModal(false);
  };

  const handleAddproprtyModalOpen = () => {
    setShowAddproprtyModal(true);
  };

  const handleAddproprtyModalClose = () => {
    setShowAddproprtyModal(false);
  };

  return (
<div className="position-fixed fixed-bottom d-flex justify-content-center align-items-center p-3" style={{ zIndex: '1000' }}>
  <div className="bg-white rounded-circle shadow mr-4">
    <FontAwesomeIcon icon={faPlus} size="2x" style={{ color: '#ec6337', cursor: 'pointer', padding: '20px' }} onClick={handleAddproprtyModalOpen} />
  </div>
  <div className="bg-white rounded-circle shadow mr-4" style={{ marginLeft:'20px'}}>
    <FontAwesomeIcon icon={faUser} size="2x" style={{ color: '#ec6337', cursor: 'pointer', padding: '20px' }} onClick={handleAccountModalOpen} />
  </div>
  <Modal show={showAccountModal} onHide={handleAccountModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal Account Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>Modal Account Body</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleAccountModalClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  <Modal show={showAddproprtyModal} onHide={handleAddproprtyModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal Addproprty Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Uploadproperty/>
      
      </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleAddproprtyModalClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</div>



  );
};

export default AddProperty;
