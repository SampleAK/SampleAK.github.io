const menu = document.querySelector(".menu");
const openButton = document.querySelector(".header-menu");
const closeButton = document.querySelector(".menu-close");
const menuLinks = menu.querySelectorAll("a");

function openMenu() {
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  openButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("is-menu-open");
  closeButton.focus();
}

function closeMenu() {
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  openButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("is-menu-open");
}

openButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", () => {
  closeMenu();
  openButton.focus();
});

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

function closeLanguage() {
  languageList.classList.remove("is-open");
  languageButton.setAttribute("aria-expanded", "false");
}

languageButton.addEventListener("click", () => {
  const isOpen = languageList.classList.toggle("is-open");
  languageButton.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language")) {
    closeLanguage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  closeLanguage();

  if (menu.classList.contains("is-open")) {
    closeMenu();
    openButton.focus();
  }
});

const header = document.querySelector(".header");
const mv = document.querySelector(".mv");

const headerObserver = new IntersectionObserver(
  ([entry]) => {
    header.classList.toggle("is-scrolled", !entry.isIntersecting);
  },
  {
    rootMargin: "-80px 0px 0px 0px",
  },
);

headerObserver.observe(mv);

let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const currentY = window.scrollY;
    const isScrollingDown = currentY > lastScrollY && currentY > 200;

    header.classList.toggle("is-hidden", isScrollingDown);

    if (isScrollingDown) closeLanguage();

    lastScrollY = currentY;
  },
  { passive: true },
);
