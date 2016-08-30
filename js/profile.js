$(document).ready(function () {
createProfile();
});

function createProfile() {

  $('#contact').on('submit', function(e) {
    e.preventDefault()
    // console.log($('#contact').serialize());
    $.ajax({
      url: 'http://localhost:3000/profiles',
      method: 'POST',
      data: $('.profile-form').serialize()
    }).done(function (newProfile) {
      (newProfile).val('')
    })
  })
}
