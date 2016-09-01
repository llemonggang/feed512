$(document).ready(function () {
  donInput()
})

function donInput() {

  $('.don-form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/donations',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        },
        method: 'POST',
        data: $('.don-form').serialize()
      }).done(function (newDonation) {
        console.log(newDonation);

        $('.don-field').val('')
      })
  })
}
