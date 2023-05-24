/* global $ */
/**
 * controls the hamburger button and menu for tablet and mobile
 *
 * @returns void
*/
function expertsHamburger() {
  /* hamburger button for both tablet and mobile */
  const oOpenMenuBtn = document.getElementsByClassName('hamburger-menu-open')[0];

  /* tablet menu variables */
  const oTabletMenu = document.getElementsByClassName('hamburger-tablet-menu')[0];
  const oCloseBtnTablet = document.getElementsByClassName('hamburger-tablet-close')[0];
  const oTabletBackDrop = document.getElementsByClassName('hamburger-tablet-backdrop')[0];
  const oBody = document.getElementsByTagName('body')[0];

  /* mobile menu variables */
  const oMobileMenu = document.getElementsByClassName('hamburger-mobile-menu')[0];
  const oCloseBtnMobile = document.getElementsByClassName('hamburger-mobile-close')[0];
  const oMobileBackDrop = document.getElementsByClassName('hamburger-mobile-backdrop')[0];
  const oMobileDropBtn = document.getElementsByClassName('mobile-btn-bottom')[0];
  const oMobileDropDown = document.getElementsByClassName('mobile-drop-down-bottom')[0];

  /*
  ** tablet functions
  */
  /* closes the tablet menu and backdrop */
  function closeTabletMenu() {
    oTabletMenu.classList.remove('tablet-menu-open');
    oTabletBackDrop.style.display = 'none';
    oBody.classList.remove('body-hidden');
  }

  /* opens the tablet menu and backdrop */
  function openTabletMenu() {
    oTabletMenu.classList.add('tablet-menu-open');
    oTabletBackDrop.style.display = 'block';
    oBody.classList.add('body-hidden');
  }

  /* auto close tablet menu on screen load */
  closeTabletMenu();

  oCloseBtnTablet.addEventListener('click', function() {
    closeTabletMenu();
  });

  oTabletBackDrop.addEventListener('click', function() {
    closeTabletMenu();
  });

  /*
  ** mobile functions
  */
  /* closes the mobile menu and backdrop */
  function closeMobileMenu() {
    oMobileMenu.classList.remove('mobile-menu-open');
    oMobileBackDrop.style.display = 'none';
    oBody.classList.remove('hidden');
  }

  /* opens the mobile menu and backdrop */
  function openMobileMenu() {
    oMobileMenu.classList.add('mobile-menu-open');
    oMobileBackDrop.style.display = 'block';
    oBody.classList.add('hidden');
  }

  /* closes the mobile dropdown */
  function mobileDropDown() {
    oMobileDropDown.classList.remove('mobile-bottom-open');
    oMobileDropBtn.classList.remove('active');
  }

  /* opens the mobile dropdown */
  function mobileDrpOpen() {
    oMobileDropDown.classList.add('mobile-bottom-open');
    oMobileDropBtn.classList.add('active');
  }

  function hasClass() {
    if ($('.mobile-btn-bottom').hasClass('active')) {
      $('.menu-logout').css('position', 'static');
      $('.mobile-menu-open').scrollTop($('.mobile-menu-open')[0].scrollHeight);
    } else {
      $('.menu-logout').css('position', 'fixed');
    }
  }

  /* auto closes the mobile dropdown on screen load */
  mobileDropDown();

  /* auto close mobile menu on screen load */
  closeMobileMenu();

  oCloseBtnMobile.addEventListener('click', function() {
    closeMobileMenu();
  });

  oMobileBackDrop.addEventListener('click', function() {
    closeMobileMenu();
  });

  oMobileDropBtn.addEventListener('click', function() {
    oMobileDropDown.classList.toggle('active');
    oMobileDropBtn.classList.toggle('active');
    hasClass();
  });

  /*
  ** closes the tablet hamburger menu when in pc or mobile view
  ** closes the mobile hamburger menu when in pc or tablet view
  */
  window.addEventListener('resize', function() {
    /* checks if window width is pc */
    if (window.innerWidth > 1281) {
      closeTabletMenu();
      closeMobileMenu();
    /* checks if window width is tablet */
    } else if (window.innerWidth <= 1280 && window.innerWidth >= 768) {
      closeMobileMenu();
    /* checks if window width is mobile */
    } else if (window.innerWidth < 768) {
      closeTabletMenu();
    }
  });

  /* opens the a menu depending on tablet or mobile view */
  oOpenMenuBtn.addEventListener('click', function() {
    const oWidth = window.innerWidth;
    if (oWidth <= 1280 && oWidth >= 768) {
      openTabletMenu();
    } else if (oWidth < 768) {
      openMobileMenu();
    }
  });
}

expertsHamburger();
