import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Form, FormGroup,Image,FormControl, Col, Button, Checkbox, Glyphicon, ControlLabel, Thumbnail } from 'react-bootstrap';
// import inviteURL from '../../public/javascripts/imageURL.js';
// import AddContact from '../../containers/AddContact.js'
import ContactList from '../ContactList/ContactList'

const previewStyle= {
    backgroundImage: "url('http://i.imgur.com/n3axy5Sb.jpg')",
    width: "300px",
    height: "300px",
    marginBottom: "100px",
};

const mapStateToProps = state =>({
  state
});

const mapDispatchToProps = dispatch => ({

  deleteContact:(id)=> {console.log('Delete',id)}, 
  addContact:(contact) => {console.log(contact)} //console logs an object

});

//TODO:State for checkbox
const Preview = (props) => {
  return (
      <div>
        <div className="previewInvite" style={previewStyle}>Preview Invite</div>
        <ContactList contacts={props.state.contacts} onDeleteContact={props.deleteContact}/>
      </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview)