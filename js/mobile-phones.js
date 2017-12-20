(function(document, undefined) {
  const body = document.body;
  const overlay = body.querySelector('.js-overlay');
  const openPhones = body.querySelector('.js-open-mobile-phones');
  const closePhones = body.querySelector('.js-mobile-phones-close');
  const handleTogglePhones = (event) => body.classList.toggle('show-phones');

  openPhones.addEventListener(
    'click',
    handleTogglePhones
  );

  closePhones.addEventListener(
    'click',
    handleTogglePhones
  );

})(window.document, undefined);
