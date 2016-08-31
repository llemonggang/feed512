function toggleClaim() {
  $(document).on('click', 'li', function (e) {
    e.preventDefault()

    // this is the link that was clicked
    var li = $(this)

    $.ajax({
      url: li.find('a.deleteBand').attr('href'),
      method: 'PUT',
      data: {
        corruptedByTheSystem: !li.hasClass('claim')
      }
    })
    .done(function () {
      li.toggleClass('claim')
    })
  })
}
