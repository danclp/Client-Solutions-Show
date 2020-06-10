jQuery(document).ready(function($) {
	// add nav on toggle click
	var dropdown = $('.toggle, .site-nav-container'),
			button = $('.toggleWrap, .site-nav-container li');
	button.click(function() {
		if(dropdown.hasClass('active')) {
			dropdown.removeClass('active');
		} else {
			dropdown.addClass('active');
		}
	});

	// remove class, on media query
	var collapse = $('.toggle, .site-nav-container');
	$(window).on('resize', function() {
		var size = $(window).width(); // get updated width when window is resized
		collapse.removeClass('active', size < 768 ); // remove class only in less or equal to
	}).resize(); // trigger resize on load

	//Smooth scrolling
	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

  // Countdown
	var pageview = new Date('2020/06/18 11:40');

	// Place event date after Date(YYYY, M - 1, DD)
	// Get Reference at http://keith-wood.name/countdown.html
	// eventday = new Date(eventday.getFullYear() + 1, 1 - 1, 26)
	$('.countdown').countdown({
		until: pageview,
		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Min', 'Sec'],
		format: 'dHMS',
		timezone: +10,
		onExpiry: liftOff,
		alwaysExpire: true
	});

	function liftOff() {
		$('.shield').hide();
	}
});