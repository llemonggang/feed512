var lock = new Auth0Lock(
  'kVq2br5crIamzToIbqQnGIY6anIO33cY',
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


// function loadTodo(todo) {
//   var li = $('<li></li>');
//     li.text(todo.task + ' ');
//     var a = $('<a>Delete</a>');      
//     a.attr('href','http://localhost:3000/bands/' + todo._id);     a.addClass('deleteBand');    
//     li.append(a);    
//      $('#todos').append(li);
//      console.log(todo);
//
// }
// function deleteToDo() {
//   $(document).on('click', 'a.deleteToDo', function (e) {
//     e.preventDefault()
//     var link = $(this)
//     $.ajax({
//       url: link.attr('href'),
//       method: 'DELETE'
//     })
//     .done(function () {
//       link.parent('li').remove()
//     })
//   })
// }
