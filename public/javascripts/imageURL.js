const inviteURL= () => {
    $(function() { 
        html2canvas($(".previewInvite"), {
            onrendered: function(canvas) {
              var img = canvas.toDataURL("image/png")
            },
            useCORS: true
        });
    });
};

export default inviteURL

