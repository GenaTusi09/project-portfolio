/*
** controls the opening and closing of the header profile menu when in logged-in mode
** invisible backdrop that takes entire screen to close the menu
*/
function expertsProfileMenu() {
  const oUserBtn = document.getElementsByClassName('profile-logo')[0];
  const oProfOption = document.getElementsByClassName('profile-option')[0];
  const oCloseDrop = document.getElementsByClassName('closer-backdrop')[0];
  const oProLogo = document.getElementsByClassName('profile-logo')[0];

  function reset() {
    /* closes the option */
    oProfOption.classList.remove('profile-option-open');
    /* closes the invisible backdrop */
    oCloseDrop.style.display = 'none';
    /* resets profile icon to non-hover/ non-active */
    // oProLogo.src = '../img/icons/profile-icon.png';
    oProLogo.style.backgroundImage = 'url(../img/icons/profile-icon.png)';
  }

  oCloseDrop.style.display = 'none';
  oProfOption.classList.remove('profile-option-open');

  /* controls opening and closing of option */
  oUserBtn.addEventListener('click', function() {
    if (oProfOption.classList.contains('profile-option-open')) {
      reset();
    } else {
      oCloseDrop.style.display = 'block';
      oProfOption.classList.add('profile-option-open');
      // oProLogo.src = '../img/icons/profile-icon-hover.png';
      oProLogo.style.backgroundImage = 'url(../img/icons/profile-icon-hover.png)';
    }
  });

  /* controls the closing of the invisible backdrop */
  oCloseDrop.addEventListener('click', function() {
    reset();
  });

  /* closes the menu when an option is clicked */
  oProfOption.childNodes.forEach((oElement) => {
    oElement.addEventListener('click', function() {
      reset();
    });
  });

  /* closes the menu when screen width changes into mobile */
  window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      reset();
    }
  });
}

expertsProfileMenu();
