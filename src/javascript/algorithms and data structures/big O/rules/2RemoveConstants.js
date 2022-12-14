function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) {
      console.log('hi');
  }
}

printFirstItemThenFirstHalfThenSayHi100Times([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Answer: O(1 + n/2 + 100) => O(n)
// Rule 2: Remove Constants => O(n)