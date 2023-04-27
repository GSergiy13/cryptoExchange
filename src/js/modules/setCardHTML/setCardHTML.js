const setCardHTML = (obj) => {
  const getParentCoinСost = document.querySelector('.options-crypto__from'),
    getCurrencyCoins = document.querySelector('.options-crypto__to');

  obj.forEach(({ id, name, currency, srcImg }) => {
    getParentCoinСost.innerHTML += `
      		<div class="options-crypto__card" data-coinCurrency="setCoinСost" data-kay="${id}">
            <div class="options-crypto__name">
              <img class="options-crypto__card-icon" src="${srcImg}" alt="icon-btc">
              <p class="options-crypto__card-text">${name}</p>
            </div>

            <div class="options-crypto__card-value">${currency}</div>
          </div>
    `;

    getCurrencyCoins.innerHTML += `
      		<div class="options-crypto__card" data-coinCurrency="getCurrencyCoins"  data-kay="${id}">
            <div class="options-crypto__name">
              <img class="options-crypto__card-icon" src="${srcImg}" alt="icon-btc">
              <p class="options-crypto__card-text">${name}</p>
            </div>

            <div class="options-crypto__card-value">${currency}</div>
          </div>
    `;
  })
}

export default setCardHTML;