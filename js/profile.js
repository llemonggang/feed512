$(document).ready(function () {
createProfile();
updateProfile();
deleteProfile();
getProfile();
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

function updateProfile() {

}

function deleteProfile() {

}

function getProfile() {
  $('.options-selected').on('submit', function(e) {
    e.preventDefault()
    console.log();
    $.ajax({
      url: 'http://localhost:3000/profiles' + profile._id,
      method: 'GET',
      data: $('.profile-form').serialize()
    }).done(function () {
      var li = $('<li/>')
      li.text(profile.body + ' ')
      $('#giver').append(li)
    })
  })
}
