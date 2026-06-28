document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const header = document.querySelector(".header");

function updateHeader() {
  if (!header) return;

  if (window.scrollY > 80) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function updateActiveMenu() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);

const revealElements = document.querySelectorAll(
  ".service-card, .case-card, .step, .section-title, .stats-box, .about-box"
);

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 90) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.className = "back-top";
topButton.setAttribute("aria-label", "Voltar ao topo");

document.body.appendChild(topButton);

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function toggleTopButton() {
  if (window.scrollY > 500) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
}

window.addEventListener("scroll", toggleTopButton);
window.addEventListener("load", toggleTopButton);