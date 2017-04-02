var client = require('twilio')(process.env.SCHMOOZER_TWILIO_ACCOUNT_SID, process.env.SCHMOOZER_TWILIO_AUTH_TOKEN);

module.exports.sendSms = function(to,mediaUrl) {
  client.messages.create({
    to: to,
    from: '+13478945168',
    body: 'Get Ready to Celebrate',
    mediaUrl: mediaUrl
  }, function(err, data) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
    } else {
      console.log('Administrator notified');
    }
  });
};