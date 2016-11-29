import React, { Component, PropTypes } from 'react';
import {  Form, FormControl, Button, FormGroup, Col, ControlLabel, Checkbox, Glyphicon } from 'react-bootstrap';

Const Preview = (props) => {
  return (
    <div>Preview Design</div>
    <div>
      <Form horizontal>
        <FormGroup controlId="formHorizontalText">
        <Col componentClass={ControlLabel} sm={2}>
        <Glyphicon glyph="user" />
        </Col>
        <Col sm={10}>
        <FormControl type="text" placeholder="Enter Guest's Name"  />
        </Col>
        </FormGroup>
        <Checkbox checked readOnly>
        Send me a copy of my invitaion.
        </Checkbox>
      </Form>


    </div>



    )
}