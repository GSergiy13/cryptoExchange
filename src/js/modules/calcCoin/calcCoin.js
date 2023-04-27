const calcCoin = () => {
  const cardsCoins = document.querySelectorAll('.options-crypto__card');
  const inputCurrency = document.querySelector('.entryCurrency');
  const outputCurrency = document.querySelector('.outputCurrency');

  console.log(inputCurrency, outputCurrency);

  cardsCoins.forEach((card, i) => {
    card.addEventListener('click', function () {

    });
  });
}

export default calcCoin;