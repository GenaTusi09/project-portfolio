/*
** toggles the pill button
*/
function expertsHeaderPill() {
  const oPill = document.getElementsByClassName('pill')[0];

  oPill.addEventListener('click', function() {
    if (oPill.classList.contains('pill-blue')) {
      oPill.classList.remove('pill-blue');
    } else {
      oPill.classList.add('pill-blue');
    }
  });
}

expertsHeaderPill();
