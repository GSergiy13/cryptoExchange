window.addEventListener('DOMContentLoaded', function () {
  const url = new URL(window.location);

  if (!url.search) {
    window.location = url.origin;
  }

  const entryCurrency = document.querySelector('.entryCurrency');
  const entryCurrencyIcon = document.querySelector('.entryCurrencyIcon');
  const outputCurrency = document.querySelector('.outputCurrency');
  const outputCurrencyIcon = document.querySelector('.outputCurrencyIcon');
  const orderMail = document.querySelector('.orderMail');
  const orderAdress = document.querySelector('.orderAdress');
  const rateOrder = document.querySelector('.rate_order');
  const amountCount = document.querySelector('.order-application__amount-count');
  const orderId = document.querySelector('.order__title span')
  const ObjectUrl = getVariables();
  console.log(getVariables());

  entryCurrencyIcon.src = (ObjectUrl.toCurrencyIconURL) ? ObjectUrl.toCurrencyIconURL : null;
  entryCurrency.textContent = (ObjectUrl.toValue && ObjectUrl.toCurrency) ? `${ObjectUrl.toValue} ${ObjectUrl.toCurrency}` : null;

  outputCurrencyIcon.src = (ObjectUrl.getCurrencyIconURL) ? ObjectUrl.getCurrencyIconURL : null;
  outputCurrency.textContent = (ObjectUrl.getValue, ObjectUrl.getCurrency) ? `${ObjectUrl.getValue} ${ObjectUrl.getCurrency}` : null;

  amountCount.textContent = (ObjectUrl.toValue) ? `${ObjectUrl.toValue}` : null;

  orderId.textContent = (ObjectUrl.orderId) ? ObjectUrl.orderId : null;

  orderMail.textContent = (ObjectUrl.email) ? ObjectUrl.email : null;
  orderAdress.textContent = (ObjectUrl.adress) ? ObjectUrl.adress : null;

  rateOrder.textContent = (ObjectUrl.rate) ? ObjectUrl.rate : null;

  function getVariables() {
    const result = Object.create(null);

    const params = new URLSearchParams(window.location.search);

    params.forEach((value, name) => result[name] = value);

    return result;
  }

});