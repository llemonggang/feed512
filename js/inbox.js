$(document).ready(function () {
pushInbox()
});

function pushInbox() {

$('.don-submit').on('click', function(e) {
  e.preventDefault()
  $.ajax({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
    url: 'http://localhost:3000/donations/claimed',
    method: 'GET'
  }).done(function (donations) {
    donations.forEach(function (donation) {
      loadDoation(donation)

    })
    // (hideDonation).val('')
  })
})
}

function loadDoation(donation) {
  var li = $('<li/>')
  li.text(donation.type + ' ')

  $.ajax({
    url: '/profiles/' + donation.recipientId
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
  }).done(function (profile) {
    li.append(profile.fullName)
  })

  $('#don-confirm').append(li)
}
