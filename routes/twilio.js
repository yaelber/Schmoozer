//Router file similar to index.js
//post route to send the sms

var models  = require('../models');
var express = require('express');
var router = express.Router();
var twilioClient = require('../twilio/twilioClient');
var inviteURL = require('../src/inviteURL')



router.get('/', (request, response, next) => {
  console.log('hello schmoozer - backend testing')
  response.send('hello-schmoozer')
});

router.post('/' , (request, response, next) => {
  // console.log(Object.keys(request.body), 'HI! Request dot Body!')
  var contacts = JSON.parse(request.body.contact);
  // var inviteURL= (mediaUrl) => {
  //   imgur.upload(mediaUrl, function (err,res) {
  //     var imgShortUrl = res.data.link
  //     console.log(imgShortUrl);
  //   });
  // }; 
  var base64Data = request.body.mediaUrl.replace(/^data:image\/png;base64,/, "");

  require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
    

    console.log('imgur short url', inviteURL("out.png"))
    console.log(err);
  });

  contacts.map(function(item){
    twilioClient.sendSms(item.number, request.body.mediaUrl) 
    console.log(item);
    console.log('this is my for loop');
  }) 
}) 


module.exports = router;