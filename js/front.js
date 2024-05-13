//Scrolling animation
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll('.date, .reveal-bot, .reveal-r, .scale-in');
    
	function scrollReveal() {
		const windowHeight = window.innerHeight;

		elems.forEach((elem) => {
			elem.classList.toggle("reveal", elem.getBoundingClientRect().top <= windowHeight / 1.2);
		});
	}
	window.addEventListener("scroll", scrollReveal);
	window.addEventListener("resize", scrollReveal);
});

//Navbar animation
window.addEventListener('scroll', function() {
	var scrolled = window.scrollY;
	var navbar = document.getElementById('navbar');
	var arrow = document.getElementById('arrow');
	var homeArrow = document.getElementById('homeArrow');

	document.body.style.backgroundPositionY = -(scrolled * 0.7) + 'px';
	if (window.scrollY > 0) {
		arrow.classList.add('hide');
		homeArrow.classList.remove('hide');
		navbar.classList.remove('navbar-light', 'bg-light');
		navbar.classList.add('navbar-dark', 'bg-dark');
	}
	else {
		arrow.classList.remove('hide');
		homeArrow.classList.add('hide');
		navbar.classList.remove('navbar-dark', 'bg-dark');
		navbar.classList.add('navbar-light', 'bg-light');
	}
});

//Progress bar animation
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progressBar');
	const progressBarRect = progressBar.getBoundingClientRect();
	const endBarRect = document.getElementById('endBar').getBoundingClientRect();
    const scrolled = window.scrollY * 1.25;
	const distance = Math.abs(progressBarRect.top - endBarRect.top);
	
    progressBar.style.height = Math.min((scrolled - progressBar.offsetTop), distance + 75) + 'px';
});