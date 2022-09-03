function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`Total coins: ${saveCoins}`);

    function countCents(cents) {
      saveCents += cents;
      console.log(`Total cents: ${saveCents}`);
    }

    return countCents;
  }
  return countCoins;
}

const myMoneyBox = moneyBox(); // When you declare a value like this, you
myMoneyBox(5, 6)
