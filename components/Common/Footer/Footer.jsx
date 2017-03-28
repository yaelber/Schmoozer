import React, { Component } from 'react';
import { Link } from 'react-router';
// import Post from '../Post/Post';


const Footer=(props) => {
  return (
<div className="footer">
        <Link to=""> About</Link>
        <Link to=""> Help</Link>
        <Link to=""> Terms&Conditions</Link>
</div>
)
};

export default Footer;