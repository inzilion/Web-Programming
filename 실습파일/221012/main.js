const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icon');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});