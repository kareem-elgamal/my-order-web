// import 'bootstrap';
var navbar = document.querySelector(".nav-section");
var sticky = navbar.offsetTop;
function navBarToTop() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  navBarToTop()
