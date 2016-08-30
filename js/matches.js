function toggleClaim() {
  $(document).on('click', 'li', function (e) {
    e.preventDefault()

    // this is the link that was clicked
    var li = $(this)

    $.ajax({
      url: js/,
      method: 'PUT',
      data: {
        corruptedByTheSystem: !li.hasClass('corrupted')
      }
    })
    .done(function () {
      li.toggleClass('corrupted')
    })
  })
}
