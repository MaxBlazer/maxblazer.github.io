(function($) {
	document.body.onload = function() {
		setTimeout(function() {
			var preloader = document.getElementById('page-preloader')
			if (!preloader.classList.contains('done')) {
				preloader.classList.add('done');
			}
		}, 1000)
	}

	'use strict';

	var $isAnimatedFirst = $('.s1 .is-animated')
	var $isAnimatedSecond = $('.s2 .is-animated')
	var $isAnimatedThird = $('.s3 .is-animated')
	var $isAnimatedFourth = $('.s4 .is-animated')

	$isAnimatedFirst.addClass('animated slideInLeft').css('animation-delay', '1.7s');;

	$('#fullPage').fullpage({
		autoScrolling: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		scrollingSpeed: 500,
		onLeave: function(index, nextIndex, direction) {
			if( index == 1 && nextIndex == 2 ) {
				$isAnimatedSecond.addClass('animated slideInRight');
			}
			else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
				$isAnimatedThird.addClass('animated rubberBand');
			}
			else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
				$isAnimatedFourth.addClass('animated jello');
			}
	    }
	});
})(jQuery);