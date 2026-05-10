// Shrink nav on scroll
const nav = document.getElementById("topnav");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}
