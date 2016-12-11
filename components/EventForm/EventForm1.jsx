import React, { Component, PropTypes } from 'react';
import {  Form, FormControl, Button, FormGroup, Col, ControlLabel, Checkbox, Glyphicon } from 'react-bootstrap';
var autocomplete = require('../../public/javascripts/autocomplete');


class EventForm extends Component {
    constructor(props) {
        super(props);
        this.handleEventNameChange = this.handleEventNameChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.state = {value:''}
    }


    handleEventNameChange (event) {
        this.setState({eventName: event.target.value}); }

    handleTimeChange (event) {
        this.setState({time: event.target.value});}

    handleLocationChange (event) {
        this.setState({location: event.target.value});
    }


    render() {
        return (
        <div className="eventForm">
            <Form horizontal>
                <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="glass" />
                </Col>
                <Col sm={10}>
                <FormControl type="text" name="eventName"placeholder="Enter Your Event's Name" onChange={this.handleEventNameChange} />
                </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="time" />
                </Col>
                <Col sm={10}>
                <FormControl  type="datetime-local" placeholder="Event's Date and Start Time" name="time"onChange={this.handleTimeChange} />
                </Col>
                </FormGroup>

                <FormGroup  controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="map-marker" />
                </Col>
                <Col sm={10}>
                <FormControl className="autocomplete" name="location" type="text" placeholder="Event's Location" onChange={this.handleLocationChange}/>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col smOffset={2} sm={10}>
                <Button type="submit" onClick={this.handleFormSubmit}>Preview and Invite Guests</Button>
                </Col>
                </FormGroup>
            </Form>
        </div>
        )
    }
        handleFormSubmit() {
        console.log(this.state.eventName);
        console.log(this.state.time);
        console.log(this.state.location);
    }

}

export default EventForm