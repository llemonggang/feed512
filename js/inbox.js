$(document).ready(function () {
// pushInbox()
loadInbox()
});

function loadInbox() {
  $.ajax({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
    url: 'http://localhost:3000/donations/claimed',
    method: 'GET'
  }).done(function (donations) {
    donations.forEach(function (donation) {
      var li = $('<li />')
      li.text(donation.type)
      $('#don-confirm').append(li)
      console.log(donations);
      })
  })

}

// function pushInbox() {
//
// $('.don-submit').on('click', function(e) {
//   e.preventDefault()
//   $.ajax({
//     headers: {
//       'Authorization': 'Bearer ' + localStorage.getItem('id_token')
//     },
//     url: 'http://localhost:3000/donations/claimed',
//     method: 'GET'
//   }).done(function (donations) {
//     donations.forEach(function (donation) {
//       loadDoation(donation)
//
//     })
//     // (hideDonation).val('')
//   })
// })
// }
