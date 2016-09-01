// var apiUrl = 'http://localhost:3000';
// var apiUrl = 'TBD';

var lock = new Auth0Lock(
  'iUWogB54EXwdr7BwdaM5nXn3rVv4crj1',
  'seesharp.auth0.com',{
         auth: {
             params: { scope: 'openid email' } //Details: https:///scopes
         }
     }
);
// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getProfile() and save it to localStorage
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    checkLoggedIn()
  });
});

$(document).ready(function() {
  checkLoggedIn()
  $('#login-button').click(function(e) {
    e.preventDefault()
    lock.show()
  })
  $('#logout-button').click(function(e) {
    e.preventDefault()
    logOut()
  })
  $('#profile-form').on('submit', function (e) {
    e.preventDefault()
    saveProfile()
    showApp()
  })
});

function saveProfile() {
  $.ajax({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
    url:'http://localhost:3000/profiles',
    method: 'POST',
    data: $('#profile-form').serialize()
  })
  .done(function (profile) {

  })
}

function logOut() {
  localStorage.removeItem('id_token')
  window.location.href = '/';
}

function checkLoggedIn() {
  if (isLoggedIn()) {
    // Get the user profile
    $.ajax({
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      },
      url: 'http://localhost:3000/profiles/me',
      method: 'GET'
    }).done(function(profileData) {
      if (profileData) {
        // User has a profile
        showApp()

      } else {
        // No profile
        showProfileForm()

      }

    })

  } else {
    showWelcome()
  }
}

// function hasProfile() {
//   $.ajax({
//     headers: {
//       'Authorization': 'Bearer ' + localStorage.getItem('id_token')
//     },
//     url: 'http://localhost3000/profiles/me',
//     method: 'GET'
//   }).done(function() {
//
//     if('id_token') {
//       console.log('has token');
//       return ;
//     } else {
//       console.log('null');
//       return false;
//     }
//   })
//
// }

function showProfileForm() {
  $('#create-profile').show()
  $('#welcome').hide()
  $('#app').hide()
}

function showWelcome() {
  $('#welcome').show()
  $('#app').hide()
  $('#create-profile').hide()
}

function showApp() {
  $('#app').show()
  $('#welcome').hide()
  $('#create-profile').hide()
}
function isLoggedIn() {
  var idToken = localStorage.getItem('id_token')
  if (idToken) {
    console.log('is Logged In');
    return true;
  } else {
    console.log('is not Logged In');
    return false;
  }
}
