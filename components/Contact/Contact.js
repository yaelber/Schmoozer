import React, { PropTypes } from 'react'
import {  Button } from 'react-bootstrap';

const Contact = ({onClick, name, number}) => (
    <li>
    {name}
    {number}
    <Button onClick={onClick}>Delete</Button>
  </li>
)

export default Contact