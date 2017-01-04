var imgur = require('imgur-node-api')
imgur.setClientID('10257f4866be84c');

const inviteURL= () => {
    $(function() { 
        html2canvas($(".previewInvite"), {
            onrendered: function(canvas) {
              var imgLongUrl = canvas.toDataURL("image/png")
            },
            useCORS: true
        });
    });
    imgur.upload(img, function (err,res) {
      var imgShortUrl = res.data.link
      console.log(imgShortUrl);
  });
};


export default inviteURL

