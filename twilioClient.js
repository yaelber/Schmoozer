//TODO: Pull user phone number from db to populate the "from" field.
// Pull contact list enetred by user to "to" field

// //> var twilio=require('./twilioClient.js')
// undefined
// > twilio.sendSms("+19174450445","+19179246749","Woot Woot!")
// undefined
// > Administrator notified
var client = require('twilio')(process.env.SCHMOOZER_TWILIO_ACCOUNT_SID, process.env.SCHMOOZER_TWILIO_AUTH_TOKEN);

module.exports.sendSms = function(to,from,message) {
  client.messages.create({
    to: to,
    from: from,
    body: message
    // mediaUrl: mediaUrl
  }, function(err, data) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
    } else {
      console.log('Administrator notified');
    }
  });
};