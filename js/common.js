$("document").ready(function() {
  $(".js-mob-menu-on").on("click", function(e) {
    e.preventDefault();
    return $(".js-mobile-menu").addClass("active");
  });
  return $(".js-mob-menu-off").on("click", function(e) {
    e.preventDefault();
    return $(".js-mobile-menu").removeClass("active");
  });
});
