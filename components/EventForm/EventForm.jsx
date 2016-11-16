import React, { Component, PropTypes } from 'react';
import {  Form, FormControl, Glyphicon  } from 'react-bootstrap';


export default EventForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form horizontal>
        <FormControl>
        id="formControlsText"
        type="text"
        label="Event Name"
          <Glyphicon glyph="glass" /> 
        placeholder="Your Event Name"  
        </FormControl>
        <FormControl>
        id="formControlsText"
        type="text"
        label="Date and Time"
          <Glyphicon glyph="time" /> 
        placeholder="Event Date and Start Time"
        </FormControl>
        <FormControl>
        id="formControlsText"
        type="text"
        label="Event Location"
        placeholder="Event Location"
         <Glyphicon glyph="map-marker" /> 
        </FormControl>
        <Button>Review and Invite Guests</Button>
      </Form>
    )
  }
}