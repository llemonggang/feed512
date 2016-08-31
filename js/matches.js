// function Claimed() {
//   $(document).on('click', 'li', function (e) {
//     e.preventDefault()
//
//     // this is the link that was clicked
//     var li = $(this)
//   })
// }

$(document).ready(function() {
  $.ajax({
    url: '/test-matches.json',
    //this will be replaced by the actual url. just checking
    method: 'GET'
  })
  .done(function (data) {
    // li.toggleClass('claimed')
    console.log(res.JSON);
  })
});
