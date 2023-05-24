function expertsFaq() {
  const aBtn = document.querySelectorAll('.experts-accordion-btn');
  const aContent = document.querySelectorAll('.experts-accordion-content');
  const oCatOptionPartner = document.querySelector('.experts-wrapper #cat-partner');
  const oCatOptionClient = document.querySelector('.experts-wrapper #cat-client');
  const oClient = document.getElementById('client');
  const oPartners = document.getElementById('partners');

  function closeContents() {
    aBtn.forEach((oBtn) => {
      oBtn.classList.remove('experts-accordion-btn-active');
    });
    aContent.forEach((oContent) => {
      oContent.style.display = 'none';
    });
  }

  closeContents();

  aBtn.forEach((oBtn) => {
    oBtn.addEventListener('click', function() {
      if (oBtn.nextElementSibling.style.display === 'block') {
        closeContents();
      } else if (oBtn.nextElementSibling.style.display === 'none') {
        closeContents();
        oBtn.nextElementSibling.style.display = 'block';
        oBtn.classList.add('experts-accordion-btn-active');
      }
    });
  });

  /**
   * Add FAQ option switch
   *
   * @returns void
  */
  oCatOptionClient.addEventListener('click', function() {
    oCatOptionPartner.classList.remove('active');
    this.classList.add('active');
    oClient.classList.add('active');
    oPartners.classList.remove('active');
  });

  oCatOptionPartner.addEventListener('click', function() {
    oCatOptionClient.classList.remove('active');
    this.classList.add('active');
    oClient.classList.remove('active');
    oPartners.classList.add('active');
  });
}

expertsFaq();
