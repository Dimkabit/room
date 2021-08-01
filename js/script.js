const headerBerger = document.querySelector('.menuToggle');
console.log(headerBerger);

const headerMenu = document.querySelector('.header-room_nav');
console.log(headerMenu);

const boDy = document.querySelector('.body');

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
 
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		
	 },

	 centeredSlides: true,
	 //spaceBetween: -40,

 });


headerBerger.addEventListener('click', () => {
	headerBerger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	boDy.classList.toggle('lock');
});