import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Modal.css'

export const Popup = ({children, show, handleClose}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-container'>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
