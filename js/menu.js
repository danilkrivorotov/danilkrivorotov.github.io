var main = function() {
	$('.head-nav-bar').click(function() {
		$('.menu').animate({ top: '0px'}, 200);
	})}
	$('.close-menu').click(function() {
		$('.menu').animate({ top: '-260px'}, 200);
	})
$(document).ready(main);