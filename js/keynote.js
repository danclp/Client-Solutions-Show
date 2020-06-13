jQuery(document).ready(function($) {
	$('.ending-message').hide();

  // Countdown
	var pageview = new Date('2020/06/18 11:45');

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
		var hideObj = $('.countdown, .embedWidget, .mobile-scroll')
		$('.ending-message').show();
		hideObj.hide();
	}
});