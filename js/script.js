const menu = document.querySelector(".menu");
const openButton = document.querySelector(".header-menu");
const closeButton = document.querySelector(".menu-close");
const menuLinks = menu.querySelectorAll("a");

function openMenu() {
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-menu-open");
}

function closeMenu() {
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-menu-open");
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
