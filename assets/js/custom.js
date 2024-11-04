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
    

    // WHAT OUR CLIENTS SAY
    $('.client-say-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

});
