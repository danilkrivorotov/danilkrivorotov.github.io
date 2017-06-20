/* Открытие меню */
var main = function() {
	$('.head-nav-bar').click(function() {
		$('.menu').show(400);
		$('.head-main').removeClass('col-lg-12');
		$('.head-main').addClass('col-lg-offset-2 col-lg-10');
		$('.head-portfolio').removeClass('col-lg-12');
		$('.head-portfolio').addClass('col-lg-offset-3 col-lg-9');
		$('.main-form').removeClass('col-lg-5');
		$('.main-form').addClass('col-lg-offset-3 col-lg-3');
		$('.jobs').removeClass('col-lg-12');
		$('.jobs').addClass('col-lg-offset-3 col-lg-9');
		$('.job').removeClass('col-lg-4');
		$('.job').addClass('col-lg-6');
		$('.about').removeClass('col-lg-6');
		$('.about').addClass('col-lg-4');
		$('.footer').removeClass('col-lg-12');
		$('.footer').addClass('col-lg-offset-3 col-lg-8');
	})
}
/* Закрытие меню */
	$('.close-menu').click(function() {
		$('.menu').hide(400);
		$('.head-main').addClass('col-lg-12');
		$('.head-main').removeClass('col-lg-offset-2 col-lg-10');
		$('.head-portfolio').addClass('col-lg-12');
		$('.head-portfolio').removeClass('col-lg-offset-3 col-lg-8');
		$('.main-form').addClass('col-lg-5');
		$('.main-form').removeClass('col-lg-offset-3 col-lg-3');
		$('.jobs').addClass('col-lg-12');
		$('.jobs').removeClass('col-lg-offset-3 col-lg-9');
		$('.job').addClass('col-lg-4');
		$('.job').removeClass('col-lg-6');
		$('.about').addClass('col-lg-6');
		$('.about').removeClass('col-lg-4');
		$('.footer').addClass('col-lg-12');
		$('.footer').removeClass('col-lg-offset-3 col-lg-8');
	})
$(document).ready(main);