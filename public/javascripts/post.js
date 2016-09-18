$(document).on('ready', function() {
  $('.delete-comment').on('click', function() {
    var commentId = $(this).data().commentId;
    $.ajax({
      method: 'DELETE',
      url: '../comments/' + commentId,
      success: function renderSuccessMessage() {
        alert('Comment deleted! :)');
        $('.comment[data-comment-id="' + commentId + '"]').remove();
      }
    });
  });
});