// function Claimed() {
//   $(document).on('click', 'li', function (e) {
//     e.preventDefault()
//
//     // this is the link that was clicked
//     var li = $(this)
//   })
// }

$(document).ready(function() {
  getMatches()
});

// once she is done comment this
// var fakeData = [
//   {
//     name: 'Foobar'
//   },
//   {
//     name: 'Test'
//   },
//   {
//     name: 'Canned Food/Tools'
//   }
]

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
      $('#matches').append('<li>' + data.name + '</li>')
    })
    // li.toggleClass('claimed')
    console.log(data);
  })
}

// claim route first thing in the mornign
