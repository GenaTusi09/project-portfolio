/* global $ */
$(document).ready(function() {
  const PKSUCCESS = 'pk_SUCC_UbHk8oiFmLNWETDtVMZQgmy6';
  const SKSUCCESS = 'sk_SUCC_VRtx6dtrYsViA199vXrQVVmv';
  const PKERROR = 'pk_ERROR_UbHk8oiFmLNWETDtVMZQgmy6';
  const SKERROR = 'sk_ERROR_VRtx6dtrYsViA199vXrQVVmv';
  const PKUSED = 'pk_USED_UbHk8oiFmLNWETDtVMZQgmy6';
  const SKUSED = 'sk_USED_VRtx6dtrYsViA199vXrQVVmv';
  const oSubmit = $('#submit');
  const oInputKey = $('.input-key');
  const oUnlinkBtn = $('#unlink-btn');

  $(document).on('change keyup', '.input-key', function() {
    let bDisabled = true;
    oInputKey.each(function() {
      const oValue = this.value;
      if ((oValue) && (oValue.trim() !== '')) {
        bDisabled = false;
      } else {
        bDisabled = true;
      }
    });
    if (bDisabled) {
      oSubmit.prop('disabled', true).addClass('.content__button .link-acc-btn:disabled');
    } else {
      oSubmit.prop('disabled', false).addClass('.content__button .link-acc-btn');
    }
  });

  function _defaultState() {
    oUnlinkBtn.hide();
    oSubmit
      .show()
      .prop('disabled', true);
    oInputKey
      .val('')
      .prop({ disabled: false, type: 'text' })
      .css('color', '#1B1E26');
  }

  oUnlinkBtn.on('click', function() {
    alert('This action will remove your PayMongo account from the app and disable the PayMongo payment method on your store.');
    _defaultState();
  });

  oSubmit.click(function() {
    const oPkInputKey = $('#publicKey').val();
    const oSkInputKey = $('#secretKey').val();
    if (oPkInputKey === PKSUCCESS && oSkInputKey === SKSUCCESS) {
      alert('Account successfully linked..');
      oSubmit.hide();
      oUnlinkBtn.show();
    } else if (oPkInputKey === PKERROR && oSkInputKey === SKERROR) {
      alert('Something went wrong. Please try again.');
    } else if (oPkInputKey === PKUSED && oSkInputKey === SKUSED) {
      alert('Your credentials are currently being used by another Cafe24 store. Unlink your credentials from the other store or enter a different set of credentials.');
    } else {
      alert('You have entered an invalid Public Key or Secret Key.');
    }
  });
});
