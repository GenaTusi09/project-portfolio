document.addEventListener('DOMContentLoaded', function() {
  const oFCNoBtn = document.getElementById('yes-active__no-btn');

  const oFCYesBtn = document.getElementById('no-active__yes-btn');

  const oFCYesContent = document.getElementById('content-illustrator__ok-active');

  const oFCNoContent = document.getElementById('content-illustrator__no-active');

  /**
   * Show flowchart content
   */
  oFCNoContent.style.display = 'none';
  oFCNoBtn.addEventListener('click', function() {
    oFCYesContent.style.display = 'none';
    oFCNoContent.style.display = 'block';
  });

  oFCYesBtn.addEventListener('click', function() {
    oFCYesContent.style.display = 'block';
    oFCNoContent.style.display = 'none';
  });
});
