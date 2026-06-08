const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 50) {
    header.style.background = 'rgba(5, 9, 20, 0.95)';
  } else {
    header.style.background = 'rgba(5, 9, 20, 0.8)';
  }
});