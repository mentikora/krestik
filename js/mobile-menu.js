(function(document, undefined) {
  const body = document.body;
  const overlay = body.querySelector('.js-overlay');
  const openMenu = body.querySelector('.js-open-mobile-menu');
  const closeMenu = body.querySelector('.js-mobile-menu-close');

  const handleToggleMenu = () => {
    body.classList.toggle('show-overlay');
    body.classList.toggle('open-mobile-menu');
  };

  openMenu.addEventListener(
    'click',
    handleToggleMenu
  );

  closeMenu.addEventListener(
    'click',
    handleToggleMenu
  );


})(window.document, undefined);
