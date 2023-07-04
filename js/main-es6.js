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

// appearence

const options = {
	rootMargin: '0px 5000px 100px 5000px',
	threshold: 0.5
};

const callback = function( entries, observer ) {
	entries.forEach(enrty => {
		const {target, isIntersecting, intersectRatio} = enrty;
		if (isIntersecting) {
			target.classList.add('target_shown')
		}
	});
};

const observer = new IntersectionObserver( callback, options );

const elems = document.querySelectorAll(".target_hidden-l, .target_hidden-r, .target_hidden-b");

elems.forEach( elem => {
	observer.observe(elem);
});