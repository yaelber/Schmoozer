import React, { Component } from 'react';
// import Post from '../Post/Post';


export default class App extends Component {
  return (
    <div className="homePage">
      <div className="header"></div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img alt="Brand" src=""></a>
            </div>
      <div className="eventCategories">
        <div className="holiday">Holiday Invitations</div>
        <div className="kids">Baby and Kids</div>
        <div className="birthday">Birthday Celebrations</div>
        <div className="getTogether">Get-togethers</div>
      </div>
      <div className="footer">
        <a href="">About</a>
        <a href="">Help</a>
        <a href="">Terms&Conditions</a>
      </div>
    </div>
  )
};
