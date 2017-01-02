import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/contacts'
import {  Button, Col, FormControl, FormGroup,Form,Glyphicon,Checkbox } from 'react-bootstrap';

// 

const AddContact = ({ addContact }) => {

  // // const handleSubmit = (e) => {
    

  // }
  return (
     <div className="inviteGuests">
          <Form inline>
            <FormGroup controlId="formInlineText">
            <Col componentClass={ControlLabel} sm={2}>
            <Glyphicon glyph="user" />
            </Col>
            <Col sm={10}>
            <FormControl type="text" placeholder="Enter Guest's First and Last Name"  />
            </Col>
            </FormGroup>
            <FormGroup controlId="formInlineText">
            <Col componentClass={ControlLabel} sm={2}>
            <Glyphicon glyph="phone" />
            </Col>
            <Col sm={10}>
            <FormControl type="text" placeholder="Enter Guest's Mobile Phone Number"  />
            </Col>
            </FormGroup>
            
            <Button type="submit">Add Guest</Button>
          </Form>
          <Checkbox>
            Send me a copy of my invitaion.
            </Checkbox>
             <Button className="sendInvite" type="submit"> Send My Invitation to Guests </Button>
      </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact
