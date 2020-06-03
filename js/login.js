jQuery(document).ready(function($) {
	$("#loginbtn").click(function() {
		$('html, body').animate({
			scrollTop: $("#speaker-intro-login").offset().top
		}, 1000);
	});
});