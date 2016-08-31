$(document).ready(function () {
  donInput()
})

function donInput() {

  $('.submit').on('submit', function (e) {
    e.preventDefault();
    var newDonation = $('.don-field').value();
    $.ajax({
        url: 'http://localhost:3000/donations',
        method: 'POST',
        data: $('.don-form').serialize()
      }).done(function (newDonation) {
        console.log(newDonation);
        loadTodo(newDonation)
        $('#don-field').val('')
      })
  })
}