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

const fadeTargets = document.querySelectorAll(".fadein");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

fadeTargets.forEach((target) => {
  observer.observe(target);
});

const languageButton = document.querySelector(".header-language");
const languageList = document.querySelector(".language-list");

languageButton.addEventListener("click", () => {
  const isOpen = languageList.classList.toggle("is-open");
  languageButton.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language")) {
    languageList.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    languageList.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  }
});
