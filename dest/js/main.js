$(document).ready(function(){
	function log(logText){
		console.log(logText);
	}
	$('.owl-carousel').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 10,
		dots: true,
		nav: true,
		navText: ['', ''],
		responsive: {
			600: {
				items: 3,
			},
			1025: {
				margin: 50
			},
			1200: {
				margin: 100
			}
		}
	});
	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top - 75
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});
});	