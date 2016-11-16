import React, { Component } from 'react';
import render from 'react-dom';
import { Modal, Col, ControlLabel, Form, FormControl, FormGroup, Checkbox, Button } from 'react-bootstrap';



const LoginModal = (props) =>  {
      return (
        <div>
          <Modal className="login-modal" show={props.modalIsOpen} onHide={props.closeModal}>
           <Modal.Header closeButton>
              <Modal.Title>Welcome Back!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>
  </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Log In</Button>
            <Button bsStyle="link">Dont have an account? Click here!</Button>
          </Modal.Footer> 
          </Modal>
        </div>
  );
}


export default LoginModal



