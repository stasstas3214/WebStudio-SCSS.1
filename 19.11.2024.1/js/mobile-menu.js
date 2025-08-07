document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  const openBtn = document.querySelector('.mobile-menu__toggle');
  const closeBtn = document.querySelector('.mobile-menu__close');

  openBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});