(function(document, undefined) {
  const body = document.body;
  const overlay = body.querySelector('.js-overlay');
  const searchForm = body.querySelector('.js-search-form');
  const searchFormText = searchForm.querySelector('.js-search-form-text');
  const searchFormClose = searchForm.querySelector('.js-search-form-close');
  const openSearch = body.querySelector('.js-open-search');

  const handleToggleSearch = () => {
    body.classList.toggle('show-overlay');
    body.classList.toggle('show-search');
  };

  const handleOpenSearch = () => {
    handleToggleSearch();
    searchFormText.focus();
  };

  const handleCloseSearch = () => {
    handleToggleSearch();
    searchFormText.blur();
  };

  openSearch.addEventListener(
    'click',
    handleOpenSearch
  );

  searchFormClose.addEventListener(
    'click',
    handleCloseSearch
  );

  overlay.addEventListener(
    'click',
    handleCloseSearch
  );

})(window.document, undefined);
