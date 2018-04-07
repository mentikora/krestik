'use strict';

$('.accordeon-text__button').on('click', function() {
	$(this).siblings('.accordeon-text').toggleClass('accordeon-text--open');
});