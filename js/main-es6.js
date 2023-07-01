(function () {
	const headerBurger = document.querySelector('.header__burger');
	const headerCross = document.querySelector('.header__nav-cross');
	const headerNav = document.querySelector('.header__nav');
	const headerNavMenu = document.querySelector('.header__nav-wrapper');
	headerBurger.addEventListener('click', () => {
		headerNav.classList.add('header__nav_active')
		headerNavMenu.classList.add('header__nav-wrapper_active')
	});
	headerCross.addEventListener('click', () => {
		headerNav.classList.remove('header__nav_active')
		headerNavMenu.classList.remove('header__nav-wrapper_active')
	});
}())