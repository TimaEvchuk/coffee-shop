let menuBtn = document.querySelector('.menu-burger'),
		headerLogo = document.querySelector('.header__logo'),
 		navBar = document.querySelector('.header__list');

if(window.innerWidth <= 576) {
	//headerLogo.style.transform = `translateX(${-50}%)`;
}
let h = headerLogo.style.left;
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	headerLogo.classList.toggle('active');
	navBar.classList.toggle('active');
	if (headerLogo.style.left == "-50%") {
		headerLogo.style.left = "50%";
	} else {
		headerLogo.style.left = "-50%";
	}
});
console.log(headerLogo.style.left == "-50%");