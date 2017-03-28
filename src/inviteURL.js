var imgur = require('imgur-node-api')
imgur.setClientID('10257f4866be84c');

const inviteURL= (mediaUrl) => {
    imgur.upload(mediaUrl, function (err,res) {
      var imgShortUrl = res.data.link
      console.log(imgShortUrl);
  });
};


module.exports = inviteURL

