/*
** controls the toggling of icons on the header
*/
function expertsHeaderBtn() {
  const oNotifLogo = document.getElementsByClassName('notif-logo')[0];
  const oChatLogo = document.getElementsByClassName('chat-logo')[0];
  const oLogout = document.getElementsByClassName('logout')[0];

  oNotifLogo.src = '../img/icons/util-notification.png';
  oChatLogo.src = '../img/icons/header-chat.png';

  /* toggles the notification bell icon */
  oNotifLogo.addEventListener('click', function() {
    if (oNotifLogo.getAttribute('src') === '../img/icons/util-notification.png') {
      oNotifLogo.src = '../img/icons/util-notification-hover.png';
    } else if (oNotifLogo.getAttribute('src') === '../img/icons/util-notification-hover.png') {
      oNotifLogo.src = '../img/icons/util-notification.png';
    }
  });

  /* toggles the chat icon */
  oChatLogo.addEventListener('click', function() {
    if (oChatLogo.getAttribute('src') === '../img/icons/header-chat.png') {
      oChatLogo.src = '../img/icons/header-chat-notif.png';
    } else if (oChatLogo.getAttribute('src') === '../img/icons/header-chat-notif.png') {
      oChatLogo.src = '../img/icons/header-chat.png';
    }
  });

  oLogout.addEventListener('click', function() {
    window.location.replace('../pages/expertsHome.html');
  });
}

expertsHeaderBtn();
