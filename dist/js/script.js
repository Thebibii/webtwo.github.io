const menuBar = document.querySelector(".ri-menu-3-line");
const menuNav = document.querySelector(".menu");
const bgNav = document.querySelector(".bgnavbar");

menuBar.addEventListener("click", function (){
	menuNav.classList.toggle("menuactive");
	bgNav.classList.toggle("bgactive");
});

bgNav.addEventListener("click", function (){
	menuNav.classList.remove("menuactive");
	bgNav.classList.remove("bgactive");
});

AOS.init();