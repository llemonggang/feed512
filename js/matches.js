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
var fakeData = [
  {
    name: 'Foobar'
  },
  {
    name: 'Test'
  },
  {
    name: 'Canned Food/Tools'
  }
]

function getMatches() {
  fakeData.forEach(function (data) {
    $('#matches').append('<li>' + data.name + '</li>')
  })

  // Uncomment this and instead of fake date pu an actual data.


  // $.ajax({
  //   url: '/matches',
  //   //this will be replaced by the actual url. just checking
  //   method: 'GET'
  // })
  // .done(function (data ) {
  //   // li.toggleClass('claimed')
  //   console.log(data);
  // })
}
