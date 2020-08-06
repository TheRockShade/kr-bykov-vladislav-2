let modalOpen = document.querySelector('.button--slider'),
		modalClose = document.querySelector('.close'),
		popup = document.querySelector('.popup-bg'),
		input = document.querySelector('.input_focus');

modalOpen.addEventListener('click', function() {
	popup.classList.add('popup_open');
	input.focus();
});

modalClose.addEventListener('click', function() {
	popup.classList.remove('popup_open');
	modalOpen.focus();
});

window.addEventListener('keydown', function(e) {
	if (e.code === 'Escape' && popup.classList.contains('popup_open')) {
		popup.classList.remove('popup_open');
	};
});