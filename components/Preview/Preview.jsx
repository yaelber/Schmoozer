import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Form, FormGroup,Image,FormControl, Col, Button, Checkbox, Glyphicon, ControlLabel, Thumbnail } from 'react-bootstrap';
import ContactList from '../ContactList/ContactList';
import EventForm from '../EventForm/EventForm1';
import InviteSentModal from '../InviteSentModal/InviteSentModal'


const imgPreviewStyle= {
    backgroundImage: "url('http://i.imgur.com/n3axy5Sl.jpg?2')",
    width: "640px",
    height: "420px",
    marginBottom: "100px",
};
const textPreviewStyle ={

}

const mapStateToProps = state =>({
  state
});

const mapDispatchToProps = dispatch => ({
  deleteContact:(id)=> {console.log('Delete',id)}, 
  addContact:(contact) => {console.log(contact)},
  handleFormSubmit(event) { 
  event.preventDefault()
  const contact = {
    name:event.target.guestName.value,
    number:event.target.guestNumber.value,
  }
    dispatch({type: 'ADD_CONTACT', contact})
  },


  sendInvite(props) {
      html2canvas($(".previewInvite"), {
          onrendered: function(canvas) {
            console.log(props.state.contacts, 'props state contacts')
            var imgLongUrl = canvas.toDataURL("image/png")
                    const smsInfo =  {
        mediaUrl: imgLongUrl,
        contact:JSON.stringify(props.state.contacts)
      };
      console.log(smsInfo)
      $.ajax ({
        type: "POST",
        url: '/api/sms',
        data:smsInfo,
        success: () => console.log('Successful Post Request!')
      })
      //Ajax Post to api/sms and then in api/sms do the ajax post to imgur
//Make a post request 


          },
          useCORS: true
      });

  }

});

//TODO:State for checkbox
const Preview = (props) => {
  return (
      <div>
        <div className="previewInvite" style={imgPreviewStyle}>
          <div style={textPreviewStyle}>
            {props.state.eventInfo.hostName} Would like to invite you to {props.state.eventInfo.eventName}. 
            {props.state.eventInfo.time}
            {props.state.eventInfo.location}
          </div>
        </div>


        <Form onSubmit={props.handleFormSubmit}>
          <FormGroup controlId="formHorizontalText">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
            <FormControl type="text" name="guestName" placeholder="Enter the Guest's Full Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalText">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
            <FormControl type="text" name="guestNumber" placeholder="Enter the Guest's Mobile Phone Number" />
            </Col> 
          </FormGroup>
          <Button type="submit"> ADD </Button>
        </Form>
        <Button type="submit" onClick={()=>{props.sendInvite(props);props.openModal()}}> Send Invitation</Button>
        <ContactList contacts={props.state.contacts} onDeleteContact={props.deleteContact}/>
      </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview)