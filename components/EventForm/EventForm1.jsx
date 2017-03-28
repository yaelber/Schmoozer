import React, { Component, PropTypes } from 'react';
import {  Form, FormControl, Button, FormGroup, Col, ControlLabel, Checkbox, Glyphicon } from 'react-bootstrap';
var autocomplete = require('../../public/javascripts/autocomplete');
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({
    handleFormSubmit: (eventInfo) => {
        console.log(eventInfo);
        dispatch({type:'UPDATE_EVENT_INFO', eventInfo})
    browserHistory.push('/preview')
    browserHistory.pop()
    }

});


class EventForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {value:''}
    }

    handleFormSubmit(event) { 
        event.preventDefault()
        const eventInfo = {
            hostName:event.target.hostName.value,
            eventName:event.target.eventName.value,
            time:event.target.time.value,
            location:event.target.location.value
        }
        console.log(event.target.hostName.value);
        console.log(event.target.eventName.value);
        console.log(event.target.time.value);
        console.log(event.target.location.value);
        this.props.handleFormSubmit(eventInfo)       
    }

    render() {
        return (
        <div className="eventForm">
            <Form horizontal onSubmit={this.handleFormSubmit}>
                <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="user" />
                </Col>
                <Col sm={10}>
                <FormControl type="text" name="hostName" placeholder="Enter the Host's Name" />
                </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="glass" />
                </Col>
                <Col sm={10}>
                <FormControl type="text" name="eventName"placeholder="Enter Your Event's Name" />
                </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="time" />
                </Col>
                <Col sm={10}>
                <FormControl  type="datetime-local" placeholder="Event's Date and Start Time" name="time" />
                </Col>
                </FormGroup>

                <FormGroup  controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                <Glyphicon glyph="map-marker" />
                </Col>
                <Col sm={10}>
                <FormControl className="autocomplete" name="location" type="text" placeholder="Event's Location" />
                </Col>
                </FormGroup>

                <FormGroup>
                <Col smOffset={2} sm={10}>
                <Button type="submit">Preview and Invite Guests</Button>
                </Col>
                </FormGroup>
            </Form>
        </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)