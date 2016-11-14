import React, { Component, PropTypes, Modal } from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import LoginModal from './LoginModal/LoginModal'


class Template extends Component {

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {props.children}
          <Footer />
        </div>
        <LoginModal />
      </div>
    );
  },
}),

export default Template;


// class Template extends Component {
//   constructor(props) {
//     super(props);
//     };
//     openModal = () => {
//     this.setState({modalIsOpen: true});
//     };
//     closeModal = () => {
//       this.setState({modalIsOpen:false});
//     };


    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);