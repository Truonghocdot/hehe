let iconNavbar = document.getElementById("toggleMenu");
let navbarMenu = document.getElementById("menuTop");
let divNavMenu = document.querySelector(".navMenu");
iconNavbar.addEventListener("click", (e) => {
  if (iconNavbar.contains(e.target)) {
    navbarMenu.classList.toggle("hidden");
    divNavMenu.appendChild(navbarMenu);
    navbarMenu.classList.remove();
  } else {
  }
});
