function togClaimed() {
  $(document).on('click', 'li', function (e) {
    e.preventDefault()

    // this is the link that was clicked
    var li = $(this)
  })
}

$(document).ready(function() {
  $.ajax({
    url: 'js/test-matches.json',
    method: 'GET'
  })
  .done(function (data) {
    // li.toggleClass('claimed')
    console.log(data);
  })
});
