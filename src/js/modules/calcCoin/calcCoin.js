import requests from '../requests/requsts.js'

const calcCoin = (coinsObjects) => {
  const currencyCoins = coinsObjects.map((value) => value.currency);
  let currentCryptoValue = null;

  const cardsCoins = document.querySelectorAll('.options-crypto__card');

  const cryptoSet = document.querySelector('.crypto-set'),
    setInputCurrency = cryptoSet.querySelector('.entryCurrency'),
    setNameCurrency = cryptoSet.querySelector('.crypto-set__name-title'),
    setIconCurrency = cryptoSet.querySelector('.crypto-set__icon-img'),
    setCurrencyValueName = cryptoSet.querySelector('.crypto-set__value-name')
  const cryptoGet = document.querySelector('.crypto-get'),
    getInputCurrency = cryptoGet.querySelector('.outputCurrency'),
    getNameCurrency = cryptoGet.querySelector('.crypto-set__name-title'),
    getIconCurrency = cryptoGet.querySelector('.crypto-set__icon-img'),
    getCurrencyValueName = cryptoGet.querySelector('.crypto-set__value-name');


  let trigerActiveCureency = null;



  cardsCoins.forEach(card => card.addEventListener('click', function () { setInfoCoin(coinsObjects[this.getAttribute('data-kay')], this.getAttribute('data-coinCurrency')) }));


  setInputCurrency.addEventListener('input', function () {
    getInputCurrency.value = 0;

    calcValue(this.value, Object.keys(currentCryptoValue).find(kay => (kay === trigerActiveCureency) ? currentCryptoValue[kay] : null));
  })


  function setInfoCoin({ name, currency, srcImg }, passage) {
    if (!name && !currency && !srcImg && !passage) return 'err not found { name, currency, srcImg }, passage';

    if (passage === 'setCoinСost') {
      setNameCurrency.textContent = name;
      setIconCurrency.src = srcImg;
      setCurrencyValueName.textContent = currency;

      requests(currency, new String(currencyCoins)).then(response => {
        currentCryptoValue = response;
        // console.log(response);
      }).catch(err => console.log(err))

    } else {
      getNameCurrency.textContent = name;
      getIconCurrency.src = srcImg;
      getCurrencyValueName.textContent = currency;

      trigerActiveCureency = currency;
    }
  }


  function calcValue(a, b) {
    console.log(a, b);
    return a * b;
  }
}

export default calcCoin;