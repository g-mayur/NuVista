$(document).ready(function () {

  //responsive header menu js start
  $(".navbar-toggler").click(function () {
    $(".as__menu-list").toggleClass("as__menu-active");
  });
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("as__menu-open");
  });
 
  // mobile view nav menu
  $('.nav-link').on('click', function() {
    $('body').removeClass('as__menu-open');
  });
 
});