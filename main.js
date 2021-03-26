const menuOpen = document.querySelector(".header-menu-toggle");
const menuClose = document.querySelector(".header-menu-close");
const headerMenu = document.querySelector(".header-menu");
const openClass = "is-open";

menuOpen.addEventListener("click", function() {
  headerMenu.classList.add(openClass);
});

menuClose.addEventListener("click", function() {
  headerMenu.classList.remove(openClass);
});

document.addEventListener("click", function(event) {
  if (!headerMenu.contains(event.target) && !event.target.matches(".header-menu-toggle")) {
    headerMenu.classList.remove(openClass);
  }
});
