document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

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

var glide1 = new Glide(".glide1",{
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

var glide2 = new Glide(".glide2",{
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
