const openButtons = document.querySelectorAll(".hamburger, .sp-nav-menu");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".menu-close");

openButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    menu.classList.add("is-open");
  });
});

closeButton.addEventListener("click", function () {
  menu.classList.remove("is-open");
});

const fadein = document.querySelectorAll(".fadein");
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
});

fadein.forEach(function (el) {
  observer.observe(el);
});

const slides = document.querySelectorAll(".fv-slide");
let current = 0;

if (slides.length > 0) {
  slides[0].offsetWidth;
  slides[0].classList.add("is-active");

  if (slides.length > 1) {
    setInterval(function () {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 5000);
  }
}

const language = document.querySelector(".language");
const languageBtn = document.querySelector(".language-button");

languageBtn.addEventListener("click", function () {
  language.classList.toggle("is-open"); //
});

if (entry.isIntersecting) {
  entry.target.classList.add("is-visible");
  observer.unobserve(entry.target);
}
