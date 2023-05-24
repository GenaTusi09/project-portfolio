/*
** controls the drop down menu in the footer
*/
function expertsFooter() {
  const footerBtnArrow = document.getElementsByClassName('footer-dd-icon')[0];
  const footerBtn = document.getElementsByClassName('footer-dd-button')[0];
  const footerMenu = document.getElementsByClassName('footer-dd-menu')[0];
  const footerBackDrop = document.getElementsByClassName('footer-dd-backdrop')[0];

  /* closes the menu, toggles the arrow icon, hides the backdrop */
  function closeMenu() {
    footerBtnArrow.src = '../img/icons/footer-chev-down.svg';
    footerMenu.style.display = 'none';
    footerBackDrop.style.display = 'none';
  }

  /* opens the menu, toggles the arrow icon, displays the invisible backdrop */
  function openMenu() {
    footerBtnArrow.src = '../img/icons/footer-chev-up.png';
    footerMenu.style.display = 'block';
    footerBackDrop.style.display = 'block';
  }

  closeMenu();

  /* checks if menu is open or closed */
  footerBtn.addEventListener('click', function() {
    if (footerMenu.style.display === 'none') {
      openMenu();
    } else if (footerMenu.style.display === 'block') {
      closeMenu();
    }
  });

  footerBackDrop.addEventListener('click', function() {
    closeMenu();
  });
}

expertsFooter();
