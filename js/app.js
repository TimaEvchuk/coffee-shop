AOS.init();
let menuBtn = document.querySelector('.menu-burger'),
		headerLogo = document.querySelector('.header__logo'),
		links = document.querySelectorAll(".header__link");
		
let h = headerLogo.style.left;
for(let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', () => {
		menuBtn.classList.remove('active');
		for(let s = 0; s < links.length; s++) {
			links[s].classList.remove('active');
		}
	});
}
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	headerLogo.classList.toggle('active');
	for(let i = 0; i < links.length; i++) {
		links[i].classList.toggle('active');
	}
});
