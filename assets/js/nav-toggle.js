document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  toggleButton.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});