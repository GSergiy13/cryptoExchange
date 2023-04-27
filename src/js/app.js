import coinsObjects from './API/coinsObjects.js'
import setCardHTML from './modules/setCardHTML/setCardHTML.js';
import calcCoin from './modules/calcCoin/calcCoin.js';

window.addEventListener('DOMContentLoaded', function () {
  setCardHTML(coinsObjects);
  calcCoin()
});