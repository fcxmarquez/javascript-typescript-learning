function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) { // O(n)
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) { // O(n)
    numbers.forEach(function(secondNumber) { // O(n)
      console.log(firstNumber + secondNumber);
    });
  });
}

// O(n + n^2) = O(n^2)
// Drop non-dominants

printAllNumbersThenAllPairSums([1,2,3,4,5])