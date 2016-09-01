
$(document).ready(function() {
  getMatches()
  markClaimed()
});

function markClaimed() {
  $(document).on('click', 'a.claimed', function (e) {
    e.preventDefault();


    var a = $(this)
    var url = $(this).attr('href')
    $.ajax({
      url: url,
      //this will be replaced by the actual url. just checking
      method: 'PUT',
      //"post"
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      }
    })
    .done(function () {
      a.parent('li').remove()
    })
  })


}

function getMatches() {

  // Uncomment this and instead of fake date put an actual data.
  $.ajax({
    url: 'http://localhost:3000/donations/available',
    //this will be replaced by the actual url. just checking
    method: 'GET',
    //"post"
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  })
  .done(function (data) {
    data.forEach(function (data) {
      var li = $("<li />")
      li.text(data.type + ' ')
      var a = $('<a />')
      a.text('Claim')
      var url = 'http://localhost:3000/donations/' + data._id + '/claim'
      a.attr('href', url)
      a.addClass('claimed')
      li.append(a)
      $('#matches').append(li)
    })
    // li.toggleClass('claimed')
    console.log(data);
  })
}

// claim route first thing in the mornign
