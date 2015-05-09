###*
  Simple router toggles content based on window.location.hash
  It can be usefull for web template development
###
$("document").ready () ->
  navigatePage = () ->
    hash = window.location.hash

    # Open homepage as defaultgukp
    if !hash && $("#homepage").length
      hash = "#homepage"

    return if !hash

    $('.js-simple-router-page').hide()
    $(hash).show()

  $(window).bind 'hashchange', navigatePage
  navigatePage()