//Router file similar to index.js
//post route to send the sms

var models  = require('../models');
var express = require('express');
var router = express.Router();
var twilioClient = require('../twilio/twilioClient');

var imgur = require('imgur-node-api')
imgur.setClientID('10257f4866be84c');




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
    

    imgur.upload("out.png", function (err,res) {
    var imgShortUrl = res.data.link
    console.log(imgShortUrl);
    contacts.map(function(item){
    twilioClient.sendSms(item.number, imgShortUrl) 
    console.log(item);
    console.log('this is my for loop');
  }) 
  });

    console.log(err);
  });

  
}) 


module.exports = router;