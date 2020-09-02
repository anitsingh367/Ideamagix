

var glide = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  gap: 35,
  perView: 2,
  bound: true,
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});

glide.mount();

var glide1 = new Glide(".glide1", {
  type: "carousel",
  startAt: 0,
  gap: 45,
  perView: 3,
  bound: true,
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});
glide1.mount();

var glide2 = new Glide(".glide2", {
  type: "carousel",
  startAt: 0,
  gap: 45,
  perView: 3,
  bound: true,
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});
glide2.mount();

let mainNav = document.getElementById("js-menu");
let navbar = document.getElementById("navbar")
let navBarToggle = document.getElementById("js-navbar-toggle");
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  navbar.classList.toggle("active2");
  
});
