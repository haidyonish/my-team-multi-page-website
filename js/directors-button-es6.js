(function () {
	const itemCross = document.querySelectorAll('.directors__item-button');
	const itemCrossActive = document.querySelectorAll('.directors__item-button_active');
	const itemImg = document.querySelectorAll('.directors__item-pic');
	const itemJobTitle = document.querySelectorAll('.directors__item-job-title');
	const itemQuote = document.querySelectorAll('.directors__item-quote');
	const itemSocial = document.querySelectorAll('.directors__item-social');
	for (let i = 0; i < itemCross.length; i += 1) {
		itemCross[i].addEventListener('click', () => {
			itemImg[i].style.display = 'none';
			itemJobTitle[i].style.display = 'none';
			itemCross[i].style.display = 'none';
			itemQuote[i].style.display = 'inline-block';
			itemSocial[i].style.display = 'block';
		});
	}
	for (let i = 0; i < itemCross.length; i += 1) {
		itemCrossActive[i].addEventListener('click', () => {
			itemImg[i].style.display = 'inline-block';
			itemJobTitle[i].style.display = 'inline-block';
			itemCross[i].style.display = 'block';
			itemQuote[i].style.display = 'none';
			itemSocial[i].style.display = 'none';
		});
	}
}())