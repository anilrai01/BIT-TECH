(function($) {

  // Add smooth scrolling to all links in navbar
  $(".navbar a, #head .link a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });


  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 20){
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 20){
      $("#head nav ul li").addClass("changeFont");
    } else {
      $("#head nav ul li a").removeClass("changeFont");
    }
  });

  //Active add and remove
  $(document).on('click','#head ul li a', function(){
      $(this).addClass('active').siblings().removeClass('active')
  })

  //Portfolio
  $(document).on('click', '.portfolio-menu ul li', function(){
    $(this).addClass('filter-active').siblings().removeClass('filter-active')
  })


})(jQuery);
