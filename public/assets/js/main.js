// BUTTON DROPDOWN MENU
function buttonMenu() {
  const links = document.getElementById("nav_bar");
  if (links.style.display == "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

function hideNavBar() {
  const links = document.getElementById("nav_bar");
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 600) {
    links.style.display = "none";
  }
}

const navLinks = document.querySelectorAll("#nav_bar a");
navLinks.forEach(function(link) {
  link.addEventListener("click", hideNavBar);
});
