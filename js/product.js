jQuery(document).ready(function($) {

	$('.owl-pro').owlCarousel({
		items:1,
    loop:true,
    margin:10,
    URLhashListener:true,
    startPosition: 'URLHash',
    dots: false
	});

	$(document).ready(function() {
    $('.family-menu li a').on('click', function(){
      $('.family-menu li').removeClass('active');
      $(this).parent().addClass('active');
    });
	});

  $('.owl-preci').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    URLhashListener:true,
    startPosition: '1',
    dots: false
  });

});