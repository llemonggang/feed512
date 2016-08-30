var lock = new Auth0Lock(
  'iUWogB54EXwdr7BwdaM5nXn3rVv4crj1',
  'seesharp.auth0.com'
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
      loadFeedApp()
  });
});
 $(document).ready(function () {
  $('#login-button').click(function (e) {
    e.preventDefault()
    lock.show()
  })
  $('#logout-button').click(function(e) {
    e.preventDefault()
    logOut()
  })
});

function logOut() {
  localStorage.removeItem('id_token')
  showWelcome()
}

function checkLoggedIn() {
  if (isLoggedIn()) {
    loadFeedApp()
  }else {
    showWelcome()
  }
}
function showWelcome() {
  $('#welcome').show()
  $('#app').hide()
}
$('#accounts').click(function () {
  showDropDown()
})
$("#main-wrapper").click(function () {
  hideDropDown()
})
function showDropDown() {
  $('.drop-down').show()
}
function hideDropDown() {
  $('.drop-down').hide()
}

function isLoggedIn() {
  var idToken = localStorage.getItem('id_token')
  if (idToken) {
    return true;
  } else {
    return false;
  }
}
function loadFeedApp() {
  console.log('loadFeedApp');
  showApp()
}
function showApp() {
  $('#app').show()
  $('#welcome').hide()
}
