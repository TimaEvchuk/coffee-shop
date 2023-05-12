AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});
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
