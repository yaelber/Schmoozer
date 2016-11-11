

import React, { Component } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';

const Template = (props) => {
  return (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
  )
};

export default Template;