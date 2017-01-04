//Router file similar to index.js
//post route to send the sms

var models  = require('../models');
var express = require('express');
var router = express.Router();
var sendSms = require('../twilio/twilioClient');
var inviteURL = require('../public/javascripts/inviteURL')
var contacts = require('../src/reducers/contacts')

router.get('/api/sms', (request, response, next) => {
  console.log('hello schmoozer - backend testing')
  response.send('hello-schmoozer')
});

router.post('/api/sms' , (request, response, next) => {
  var contacts = contacts.state.number //This should be the redux state - not sure about 1. which file to require 2. how to "name" it?
  var phoneNumber = "";
  var x;
  for (x in contacts) {
    phoneNumber += contacts[x];
    sendSms(phoneNumber,'9179246749',"Get Ready to Celebrate",imgShortUrl)
  }
}) 


module.exports = router;