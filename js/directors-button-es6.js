(function () {
	const itemCross = document.querySelectorAll('.directors__item-button');
	const itemCrossActive = document.querySelectorAll('.directors__item-button_active');
	const itemInfo = document.querySelectorAll('.director__items-item-person-info');
	const itemQuote = document.querySelectorAll('.director__items-item-person-quote');
	for (let i = 0; i < itemCross.length; i += 1) {
		itemCross[i].addEventListener('click', () => {
			itemCross[i].classList.add('directors__item-button_clicked');
			itemCrossActive[i].classList.add('directors__item-button_active_clicked');
			itemQuote[i].classList.add('director__items-item-person-quote_active');
			itemInfo[i].classList.add('director__items-item-person-info_active');
		});
	}
	for (let i = 0; i < itemCross.length; i += 1) {
		itemCrossActive[i].addEventListener('click', () => {
			itemCross[i].classList.remove('directors__item-button_clicked');
			itemCrossActive[i].classList.remove('directors__item-button_active_clicked');
			itemQuote[i].classList.remove('director__items-item-person-quote_active');
			itemInfo[i].classList.remove('director__items-item-person-info_active');
		});
	}
}())