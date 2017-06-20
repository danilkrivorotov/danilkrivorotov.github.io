/* Открытие меню */
var main = function() {
	$('.head-nav-bar').click(function() {
		$('.menu').show(400);
		$('.head-main').removeClass('col-lg-offset-5 col-lg-6');
		$('.head-main').addClass('col-lg-offset-1 col-lg-11');
		$('.about').removeClass('col-lg-5');
		$('.about').addClass('col-lg-offset-2 col-lg-4');
		$('.about').css({'padding-right' : '0'});
		$('.foto').removeClass('col-lg-offset-1');
		$('.foto').css({'float' : 'right'});
		$('.work-head').removeClass('col-lg-12');
		$('.work-head').addClass('col-lg-offset-2 col-lg-10');
		$('.first-half').removeClass('col-lg-5');
		$('.first-half').addClass('col-lg-offset-2 col-lg-4');
		$('.first-half p').css({'padding-right' : '0'});
		$('.second-half').removeClass('col-lg-5');
		$('.second-half').addClass('col-lg-4');
		$('.second-half p').css({'padding-right' : '0'});
		$('.bachelor').css({'margin-top' : '125px'});
		$('.first-skills').removeClass('col-lg-4');
		$('.second-skills').removeClass('col-lg-4');
		$('.first-skills').addClass('col-lg-offset-2 col-lg-5');
		$('.second-skills').addClass('col-lg-5');
		$('.third-skills').hide();
		$('.main-form').removeClass('col-lg-5');
		$('.main-form').addClass('col-lg-offset-2 col-lg-3');
		$('footer').removeClass('col-lg-12');
		$('footer').addClass('col-lg-offset-2 col-lg-10');
	})
}
/* Закрытие меню */
	$('.close-menu').click(function() {
		$('.menu').hide(400);
		$('.head-main').addClass('col-lg-offset-5 col-lg-6');
		$('.head-main').removeClass('col-lg-offset-1 col-lg-11');
		$('.about').addClass('col-lg-5');
		$('.about').removeClass('col-lg-offset-2 col-lg-4');
		$('.about').css({'padding-right' : '130px'});
		$('.foto').addClass('col-lg-offset-1');
		$('.foto').css({'float' : 'left'});
		$('.work-head').addClass('col-lg-12');
		$('.work-head').removeClass('col-lg-offset-2 col-lg-10');
		$('.first-half').addClass('col-lg-5');
		$('.first-half').removeClass('col-lg-offset-2 col-lg-4');
		$('.first-half p').css({'padding-right' : '95px'});
		$('.second-half').addClass('col-lg-5');
		$('.second-half').removeClass('col-lg-4');
		$('.second-half p').css({'padding-right' : '95px'});
		$('.bachelor').css({'margin-top' : '177px'});
		$('.first-skills').addClass('col-lg-4');
		$('.second-skills').addClass('col-lg-4');
		$('.first-skills').removeClass('col-lg-offset-2 col-lg-5');
		$('.second-skills').removeClass('col-lg-5');
		$('.third-skills').show();
		$('.main-form').addClass('col-lg-5');
		$('.main-form').removeClass('col-lg-offset-2 col-lg-3');
		$('footer').addClass('col-lg-12');
		$('footer').removeClass('col-lg-offset-2 col-lg-10');
	})
$(document).ready(main);