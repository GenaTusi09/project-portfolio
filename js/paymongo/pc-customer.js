/* global $ , Swal */
$(document).ready(function() {
  const oSubmit = $('#submit');
  const oRadioBtn = $('.radio');
  const oCardDetails = $('.card-details');
  let bDisabled = true;
  /*
    * Enable/disable the button when there's a selected mode of payment
    *
    *
  */
  function _enableDisableButton(oInputs) {
    oInputs.each(function() {
      const oValue = this.value;
      if ((oValue) && (oValue.trim() !== '')) {
        bDisabled = false;
      } else {
        bDisabled = true;
      }
    });

    if (bDisabled) {
      oSubmit.prop('disabled', true).addClass('.mode-of-payment--button .pay-button:disabled');
    } else {
      oSubmit.prop('disabled', false).addClass('.mode-of-payment--button .pay-button');
    }
  }

  $(document).on('change keyup', '.radio-button-visa', function() {
    const oInputs = $('.radio-button-visa');
    oCardDetails.show();
    _enableDisableButton(oInputs);
  });

  $(document).on('change keyup', '.radio', function() {
    const oInputs = oRadioBtn;
    const oCardInputs = $('.card-details');
    oCardInputs.hide();
    _enableDisableButton(oInputs);
  });

  function _alerts(eText) {
    Swal.fire({
      text: eText,
      confirmButtonColor: '#4a5164',
    });
  }

  oSubmit.click(function() {
    if ($('#radio-grabpay').is(':checked')) {
      const eText = 'The selected method of payment is not yet configured. Please contact the store owner or select another payment method to proceed.';
      _alerts(eText);
    } else {
      const eText = 'Proceed to the next page';
      _alerts(eText);
    }
  });
});
