
/**
  Simple router toggles content based on window.location.hash
  It can be usefull for web template development
 */
$("document").ready(function() {
  var navigatePage;
  navigatePage = function() {
    var hash;
    hash = window.location.hash;
    if (!hash && $("#homepage").length) {
      hash = "#homepage";
    }
    if (!hash) {
      return;
    }
    $('.js-simple-router-page').hide();
    return $(hash).show();
  };
  $(window).bind('hashchange', navigatePage);
  return navigatePage();
});
