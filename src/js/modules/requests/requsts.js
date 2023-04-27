async function requsts(getCoinСost, getCurrencyCoins) {
  // console.log(`із валюти ${getCoinСost} получим ${getCurrencyCoins}`);
  const fentchRespos = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${getCoinСost}&tsyms=${getCurrencyCoins}`);

  if (fentchRespos.ok) {
    return await fentchRespos.json();
  } else {
    console.error(`HTTP error: ${fentchRespos.status}`);
  }
}

export default requsts;