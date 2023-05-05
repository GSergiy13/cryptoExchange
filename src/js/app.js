import coinsObjects from './API/coinsObjects.js'
import setCardHTML from './modules/setCardHTML/setCardHTML.js';
import calcCoin from './modules/calcCoin/calcCoin.js';


window.addEventListener('DOMContentLoaded', function () {
  try {
    setCardHTML(coinsObjects);
  } catch (e) { }

  try {
    calcCoin(coinsObjects);
  } catch (e) { }


  window.addEventListener('load', function () {
    document.querySelector('.placeholder').classList.add('off')
  });

});

