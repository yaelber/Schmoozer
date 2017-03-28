import React, { Component } from 'react';
import render from 'react-dom';
import { Modal, Col, ControlLabel, Form, FormControl, FormGroup, Checkbox, Button } from 'react-bootstrap';



const InviteSentModal = (props) =>  {
      return (
        <div>
          <Modal className="sent-modal" show={props.modalIsOpen} onHide={props.closeModal}>
           <Modal.Header closeButton>
              <Modal.Title>Your invitation was sent to your guests!</Modal.Title>
            </Modal.Header>
          </Modal>
        </div>
  );
}


export default InviteSentModal