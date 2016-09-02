$(document).ready(function () {
createProfile();
});

function createProfile() {

  $('#contact').on('submit', function(e) {
    e.preventDefault()
    // console.log($('#contact').serialize());
    $.ajax({
      url: 'https://feed512.herokuapp.com/profiles',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      },
      method: 'POST',
      data: $('.profile-form').serialize()
    }).done(function (newProfile) {
      (newProfile).val('')
    })
  })
}
