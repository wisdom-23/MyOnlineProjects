const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', () => {
      if (menuLinks.classList.contains('active')) {
        menuLinks.style.maxHeight = '1';
        menuLinks.classList.remove('active');
      } else {
        menuLinks.style.maxHeight = menuLinks.scrollHeight + 'px';
        menuLinks.classList.add('active');
      }
    });