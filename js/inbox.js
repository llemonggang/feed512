$(document).ready(function() {
  pushInbox()
  loadInbox()
});

function loadInbox() {
  $.ajax({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
    url: 'http://localhost:3000/donations/claimed',
    method: 'GET'
  }).done(function(donations) {
    donations.forEach(function(donation) {
      var li = $('<li />')
      li.text(donation.type)
      $('#don-confirm').append(li)
      getProfile(donation.recipientId, function(profile) {
        console.log(profile);
        var div = $('<div />')
        div.text(profile.fullName)
        li.append(div)
        var div = $('<div />')
        div.text(profile.address)
        li.append(div)
        var div = $('<div />')
        div.text(profile.phone)
        li.append(div)
        var div = $('<div />')
        div.text(profile.businessType)
        li.append(div)
        var div = $('<div />')
        div.text(profile.email)
        li.append(div)

      })
    })
  })

}

function getProfile(userId, cb) {
  $.ajax({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
    url: 'http://localhost:3000/profiles/' + userId,
    method: 'GET'
  }).done(function(profile) {
    cb(profile)
      // profiles.forEach(function (profile) {
      //   console.log(profile);
      // var li = $('<li />')
      // li.text(profile.fullName.businessType.address.phone.email)
      // $('#receiver-profile').append(li)
      // })
  })
}

function pushInbox() {

  $('.don-submit').on('click', function(e) {
    e.preventDefault()
    $.ajax({
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      },
      url: 'http://localhost:3000/donations/claimed',
      method: 'GET'
    }).done(function(donations) {
      donations.forEach(function(donation) {
          loadDoation(donation)

        })
        // (hideDonation).val('')
    })
  })
}
