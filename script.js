// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// =========================
// CLOSE MOBILE MENU
// =========================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);


sections.forEach((section) => {

  observer.observe(section);

});