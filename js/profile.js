$(document).ready(function () {

});

function createProfile() {
  $('.<submit-btn>').on('submit', function(e) {
    e.preventDefault()
    var newProfile = [];
    newProfile.push($('#fullName-field').val());
    newProfile.push($('#businessType-field').val());
    newProfile.push($('#address-field').val());
    newProfile.push($('#phone-field').val());
    newProfile.push($('#email-field').val());
    console.log();
    $.ajax({
      url: 'http://localhost:3000/profiles',
      method: 'POST',
      data: $('.profile-form').serialize()
    }).done(function (newProfile) {
      (newProfile).val('')
    })
  })
}
