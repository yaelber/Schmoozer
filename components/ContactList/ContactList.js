import React, { PropTypes } from 'react'
import Contact from '../Contact/Contact'

const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
    {contacts.map((contact,key) =>
      <Contact
        key={key}
        {...contact}
        onClick={() => onDeleteContact(key)}
      />
    )}
  </ul>
)

export default ContactList

//contact is {name+number}

