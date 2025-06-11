document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  function showSection(id) {
    sections.forEach((section) => {
      if ("#" + section.id === id) {
        section.style.display = "block";
        section.classList.add("fade-in");
      } else {
        section.style.display = "none";
        section.classList.remove("fade-in");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      showSection(targetId);
    });
  });

  // Show About by default
  showSection("#about");
});
