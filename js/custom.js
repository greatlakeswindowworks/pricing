
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

// JavaScript to change logo and make navbar sticky on scroll
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');

    // Check scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('sticky'); // Add sticky class to navbar
        logo.src = 'scrolled-logo.png'; // Change to scrolled logo
    } else {
        navbar.classList.remove('sticky'); // Remove sticky class
        logo.src = 'cropped.png'; // Revert to original logo
    }
});

// JavaScript to add the sticky class to navbar on scroll
window.addEventListener('scroll', function () {
    var stickyWrapper = document.querySelector('.sticky-wrapper');
    
    // Check if the user has scrolled past a certain point
    if (window.scrollY > 50) {
        stickyWrapper.classList.add('is-sticky'); // Add the 'is-sticky' class
    } else {
        stickyWrapper.classList.remove('is-sticky'); // Remove the 'is-sticky' class
    }
});

