import React, { Component } from 'react';
import { Jumbotron, Panel, Image } from 'react-bootstrap';


const EventCategories = (props) => {
  return (
      <div className="eventCategories">
        <div className="birthday" style={categoryStyle.birthday}>Birthday</div>
        <div className="holiday" style={categoryStyle.holiday}>Holiday</div>
        <div className="kids" style={categoryStyle.kids}>Baby and Kids</div>
      </div>
  )
};

const categoryStyle = ({
  birthday :{
    backgroundImage: "url('http://i.imgur.com/p5YzBv3.jpg')",
    color: '#248f8f',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: '100',
    fontFamily:'Copperplate',
    width: 'auto',
    height: '300',
    marginTop: '10px',
    marginBottom: '10px',
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat'
  },
    holiday :{
    backgroundImage: "url('http://i.imgur.com/aaCk6Ft.jpg')",
    color: '#cc0000',
    textAlign:'center',
    fontFamily:'Copperplate',
    fontWeight: 'bold',
    fontSize: '100',
    width: 'auto',
    height: '300',
    marginTop: '10px',
    marginBottom: '10px'
  },
  kids :{
    backgroundImage: "url('http://i.imgur.com/JbSZaYl.jpg')",
    color: ' #ffb380',
    textAlign:'center',
    fontFamily:'Copperplate',
    fontWeight: 'bold',
    fontSize: '100',
    width: 'auto',
    height: '300',
    marginTop: '10px',
    marginBottom: '10px'
  }

})
export default EventCategories;
