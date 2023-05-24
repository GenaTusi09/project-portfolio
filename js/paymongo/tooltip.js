document.addEventListener('DOMContentLoaded', function() {
  const oTooltip = document.querySelectorAll('.tooltip');
  const oTooltipContainer = document.getElementById('tooltip__content');
  const oTooltipButton = document.querySelectorAll('.tooltip__button');
  const oTooltipTitle = document.getElementById('tooltip__title');
  const oTooltipTips = document.getElementById('tooltip__tips');

  /**
   * Closes the active tooltip
   *
   * @returns void
   */
  function closeTooltip() {
    const oTooltipCloseButton = document.getElementById('close-tooltip');
    oTooltipCloseButton.addEventListener('click', function() {
      this.parentNode.parentNode.parentNode.classList.remove('active');
      this.parentNode.parentNode.style.display = 'none';
    });
  }

  /**
   * Select All tooltip buttons then remove the active class
   *
   * @returns void
   */
  function selectTooltip() {
    [].forEach.call(oTooltip, function(oList) {
      oList.classList.remove('active');
    });
  }

  /**
   * Creates the tooltip content
   *
   * @returns void
   */
  function createTooltipContent(TITLE_TEXT, TIPS_CONTENT) {
    oTooltipTitle.textContent = TITLE_TEXT;

    TIPS_CONTENT.forEach(function(sTip) {
      const oTipsItems = document.createElement('li');
      const oTipsItemsWrap = document.createElement('p');
      oTipsItemsWrap.innerHTML = sTip;
      oTipsItems.appendChild(oTipsItemsWrap);
      oTooltipTips.appendChild(oTipsItems);
    });
  }
  /**
   * Calculate the element position
   *
   */
  function getOffset(element) {
    const oPosition = element.getBoundingClientRect();
    return {
      left: oPosition.left + window.scrollX,
      top: oPosition.top + window.scrollY,
    };
  }

  /**
   * Target sepcific viewport
   *
   */
  function _getViewport(eClickElement) {
    if (eClickElement.classList.contains('tooltip__button--step2')) {
      oTooltipContainer.style.top = getOffset(eClickElement).top + 16 + 'px';
      oTooltipContainer.style.left = getOffset(eClickElement).left - 30.79 + 'px';
      oTooltipContainer.classList.remove('step-4');
    } else {
      oTooltipContainer.style.top = getOffset(eClickElement).top - 210 + 'px';
      oTooltipContainer.style.left = getOffset(eClickElement).left - 23.19 + 'px';
      oTooltipContainer.classList.add('step-4');
    }
  }

  [].forEach.call(oTooltipButton, function(eClick) {
    eClick.addEventListener('click', function() {
      const oParent = this.parentNode;
      const oTipsList = oTooltipTips.querySelectorAll('li');
      let TITLE_TEXT = '';
      let TIPS_CONTENT = '';
      const eClickElement = this;

      [].forEach.call(oTipsList, function(oList) {
        oList.remove();
      });
      if (this.classList.contains('tooltip__button--step2')) {
        TITLE_TEXT = 'Step 2 tooltip';
        TIPS_CONTENT = ['Log in to your <a href="#">PayMongo Dashboard.</a>', 'Under Menu, click <u></> Developers</u> then toggle on the <u>View live data</u> on the bottom left of the Menu to see your live Public Key and Secret Key.', 'Copy your Public Key and Secret Key to the corresponding input fields on the PayMongo app.'];
      } else {
        TITLE_TEXT = 'Step 4 tooltip';
        TIPS_CONTENT = ['To display the PayMongo payment method on a specific store, go to <u>My Store>Payments>Payment methods</u> on your admin page in Advanced Mode. For Smart Mode, go to <u>Settings>Payments</u> on your admin page. If your account has not been verified, authenticate your account.', 'Change the <u>Display</u> option for PayMongo to <u>Yes</u> and click <u>Save</u>. The PayMongo payment option will now be available on your store\'s checkout page.'];
      }
      if (oParent.classList.contains('active')) {
        oParent.classList.remove('active');
        oTooltipContainer.style.display = 'none';
      } else {
        selectTooltip();
        oParent.classList.add('active');
        createTooltipContent(TITLE_TEXT, TIPS_CONTENT);
        oTooltipContainer.style.display = 'block';
        _getViewport(eClickElement);
      }
    });
  });

  document.addEventListener('mouseup', function(eClick) {
    if (!eClick.target.closest('.tooltip')) {
      oTooltipContainer.style.display = 'none';
      selectTooltip();
    }
  });

  closeTooltip();
});
