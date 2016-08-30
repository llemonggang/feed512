$(document).ready(function () {
pushInbox()
});

function pushInbox() {

$('<.don-submit>').on('click', function(e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:3000/donations',
    method: 'POST',
    data: $('.don-form').serialize()
    var li = $('<li/>')
    li.text(donation.type + ' ')
    li.append(a)
    $('#don-confirm').append(li)
    claimItems();
  }).done(function (hideDonation) {
    (hideDonation).val('')
  })
})
}

function claimItems() {
  url: 'http://localhost:3000/profiles',
  method: 'GET',
  data: userId

}
