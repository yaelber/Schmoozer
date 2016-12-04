import React, { Component } from 'react';
import {  Form, FormGroup,FormControl, Col, Button, Checkbox, Glyphicon, ControlLabel } from 'react-bootstrap';

//TODO:State for checkbox
const Preview = (props) => {
  return (
    <div>
        <div className="preview">Preview Design</div>
        <div className="inviteGuests">
          <Form horizontal>
            <FormGroup controlId="formHorizontalText">
            <Col componentClass={ControlLabel} sm={2}>
            <Glyphicon glyph="user" />
            </Col>
            <Col sm={10}>
            <FormControl type="text" placeholder="Enter Guest's Name"  />
            </Col>
            </FormGroup>
            <Checkbox>
            Send me a copy of my invitaion.
            </Checkbox>
            <Button type="submit">Add Guest</Button>
          </Form>
        </div>
    </div>
    )
}

export default Preview