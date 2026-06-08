const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});