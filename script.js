// Fade in animation

const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fadeInUp");
      } else {
        element.classList.remove("fadeInUp");
      }
    });
  });
} 