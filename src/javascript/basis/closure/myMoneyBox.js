function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`Total coins: ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox(); // When you declare a value like this, you convert the const to a function because you are returning a function.
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxAna = moneyBox(); // Instance of the function
moneyBoxAna(5) // The closure remembers the value of the variable saveCoins
moneyBoxAna(5)
moneyBoxAna(10)

// In a closure you can access the parameters of the function that created the closure