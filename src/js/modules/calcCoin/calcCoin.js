import requests from '../requests/requsts.js'

const calcCoin = coinsObjects => {
  const currencyCoins = coinsObjects.map((value) => value.currency);
  const formPayment = document.querySelector('form');
  const cardsCoins = document.querySelectorAll('.options-crypto__card');

  const cryptoSet = document.querySelector('.crypto-set'),
    setInputCurrency = cryptoSet.querySelector('.entryCurrency'),
    setNameCurrency = cryptoSet.querySelector('.crypto-set__name-title'),
    setIconCurrency = cryptoSet.querySelector('.crypto-set__icon-img'),
    setCurrencyValueName = cryptoSet.querySelector('.crypto-set__value-name'),
    exchangeRate = cryptoSet.querySelector('.crypto-set__real-curs');

  const cryptoGet = document.querySelector('.crypto-get'),
    getInputCurrency = cryptoGet.querySelector('.outputCurrency'),
    getNameCurrency = cryptoGet.querySelector('.crypto-set__name-title'),
    getIconCurrency = cryptoGet.querySelector('.crypto-set__icon-img'),
    getCurrencyValueName = cryptoGet.querySelector('.crypto-set__value-name');

  let currentCryptoValue = null;
  let trigerActiveCureencyGet = 'TRX';
  let trigerActiveCureencyGetSet = 'BTC';

  const purseObjs = {
    ADA: 0.02,
    BNB: 0.01,
    BTC: 0.001,
    ETH: 0.009,
    LINK: 0.003,
    LTC: 0.005,
    OMG: 0.004,
    SOL: 0.01,
    TRX: 0.01,
    TUSD: 0.01,
    USDC: 0.01,
    USDT: 0.01,
    ZRX: 0.01
  }

  requests('btc', new String(currencyCoins)).then(response => currentCryptoValue = response).catch(err => console.log(err));

  cardsCoins.forEach(card => card.addEventListener('click', async function () {
    await setInfoCoin(coinsObjects[this.getAttribute('data-kay')], this.getAttribute('data-coinCurrency'));

    getInputCurrency.value = calcValue(Number(setInputCurrency.value), currentCryptoValue[trigerActiveCureencyGet], purseObjs[trigerActiveCureencyGet]).toFixed(5);

    exchangeRate.innerHTML = `Rate: <span>1 ${(trigerActiveCureencyGetSet) ? trigerActiveCureencyGetSet : null} = ${(currentCryptoValue[trigerActiveCureencyGet]) ? currentCryptoValue[trigerActiveCureencyGet] : ''} ${(trigerActiveCureencyGet) ? trigerActiveCureencyGet : ''}</span>`;
  }));

  setInputCurrency.addEventListener('input', function () {


    this.value = this.value.replace(/[^0-9.]/g, '');
    getInputCurrency.value = calcValue(Number(this.value), currentCryptoValue[trigerActiveCureencyGet], 0.05).toFixed(5);
  })

  async function setInfoCoin({ name, currency, srcImg }, passage) {
    if (!name && !currency && !srcImg && !passage) return 'err not found { name, currency, srcImg }, passage';

    if (passage === 'setCoinСost') {
      setNameCurrency.textContent = name;
      setIconCurrency.src = srcImg;
      setCurrencyValueName.textContent = currency;

      trigerActiveCureencyGetSet = currency;

      await requests(currency, new String(currencyCoins))
        .then(response => currentCryptoValue = response)
        .catch(err => console.log(err))
    } else {
      getNameCurrency.textContent = name;
      getIconCurrency.src = srcImg;
      getCurrencyValueName.textContent = currency;

      trigerActiveCureencyGet = currency;
    }
  }
  function setVariables(variableArray) {
    const url = new URL(window.location);
    url.pathname = "order.html";

    variableArray.forEach(([name, value]) => {
      url.searchParams.set(name, value);
    });

    window.location = url;
  }

  if (formPayment) {
    formPayment.addEventListener('submit', function (e) {
      e.preventDefault();

      const formPaymentInputMail = document.querySelector('form input[name="email"]').value;
      const formPaymentInputAdrees = document.querySelector('form input[name="adress"]').value;

      setVariables([
        ["adress", formPaymentInputAdrees],
        ["email", formPaymentInputMail],
        ['toValue', setInputCurrency.value],
        ['toCurrency', setCurrencyValueName.outerText],
        ['toCurrencyIconURL', setIconCurrency.src],
        ['rate', exchangeRate.outerText],
        ['orderId', Math.floor(Math.random() * 100001) + 50000],
        ['getValue', getInputCurrency.value],
        ['getCurrency', getCurrencyValueName.outerText],
        ['getCurrencyIconURL', getIconCurrency.src],
      ]);
    })
  }

  function calcValue(a, b, percent) {
    return (percent) ? (((a * b) * percent) + (a * b)) : a * b;
  }
}

export default calcCoin;