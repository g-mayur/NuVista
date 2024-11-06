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

        // Header animation js start
        // var t = 0;
        // $(window).scroll(function () {
        //   var i = $(this).scrollTop();
        //   if (i > t) {
        //     $(".nv__header-wrap").addClass("slideOutUp");
        //     $(".nv__header-wrap").removeClass("slide-down");
        //   } else {
        //     $(".nv__header-wrap").removeClass("slideOutUp");
        //     $(".nv__header-wrap").addClass("slide-down");
        //   }
        //   t = i;
        // });
        
        // var t = 0;
        // $(window).scroll(function () {
        //   var i = $(this).scrollTop();
        //   if (i > t) {
          
        //     if (!$(".nv__header-wrap").hasClass("slideOutUp")) {
        //       $(".nv__header-wrap").addClass("slideOutUp").removeClass("slide-down");
        //     }
        //   } else {
        //     if (!$(".nv__header-wrap").hasClass("slide-down")) {
        //       $(".nv__header-wrap").removeClass("slideOutUp").addClass("slide-down");
        //     }
        //   }
        //   t = i;
        // });

        
        // Header animation js start

});
