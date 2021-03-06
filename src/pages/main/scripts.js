// Popup

let modalOpen = document.querySelector('.slider__button'),
		modalClose = document.querySelector('.popup__close'),
		popup = document.querySelector('.popup'),
		input = document.querySelector('.input_focus'),
		body = document.querySelector('body');

modalOpen.addEventListener('click', function() {
	body.classList.add('body_scroll');
	popup.classList.add('popup_open');
	input.focus();
});

modalClose.addEventListener('click', function() {
	body.classList.remove('body_scroll');
	popup.classList.remove('popup_open');
	modalOpen.focus();
});

// Menu

let menuOpen = document.querySelector('.header__open'),
		menuClose = document.querySelector('.header__close'),
		menu = document.querySelector('.menu'),
		header = document.querySelector('.header'),
		menuFocus = document.querySelector('.item_focus');

menuOpen.addEventListener('click', function() {
	body.classList.add('body_scroll');
	header.classList.add('header_sticky');
	menu.classList.add('active');
	menuOpen.classList.add('disabled');
	menuClose.classList.add('active');
	menuFocus.focus();
});

menuClose.addEventListener('click', function() {
	body.classList.remove('body_scroll');
	header.classList.remove('header_sticky');
	menu.classList.remove('active');
	menuOpen.classList.remove('disabled');
	menuClose.classList.remove('active');
	menuOpen.focus();
});

window.addEventListener('keydown', function(e) {
	if (e.code === 'Escape' && popup.classList.contains('popup_open')) {
		popup.classList.remove('popup_open');
	};
	
	if (e.code === 'Escape' && menu.classList.contains('active')) {
		menu.classList.remove('active');
		menuOpen.classList.remove('disabled');
		menuClose.classList.remove('active');
	};
});