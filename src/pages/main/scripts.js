// Popup

let modalOpen = document.querySelector('.button--slider'),
		modalClose = document.querySelector('.close'),
		popup = document.querySelector('.popup-bg'),
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

let menuOpen = document.querySelector('.menu-open'),
		menuClose = document.querySelector('.menu-close'),
		menu = document.querySelector('.menu'),
		header = document.querySelector('.header'),
		menuFocus = document.querySelector('.item_focus');

menuOpen.addEventListener('click', function() {
	body.classList.add('body_scroll');
	header.classList.add('header_sticky');
	menu.classList.add('menu_active');
	menuOpen.classList.add('menu-open_disable');
	menuClose.classList.add('menu-close_active');
	menuFocus.focus();
});

menuClose.addEventListener('click', function() {
	body.classList.remove('body_scroll');
	header.classList.remove('header_sticky');
	menu.classList.remove('menu_active');
	menuOpen.classList.remove('menu-open_disable');
	menuClose.classList.remove('menu-close_active');
	menuOpen.focus();
});

window.addEventListener('keydown', function(e) {
	if (e.code === 'Escape' && popup.classList.contains('popup_open')) {
		popup.classList.remove('popup_open');
	};
	if (e.code === 'Escape' && menu.classList.contains('menu_active')) {
		menu.classList.remove('menu_active');
		menuOpen.classList.remove('menu-open_disable');
		menuClose.classList.remove('menu-close_active');
	};
});