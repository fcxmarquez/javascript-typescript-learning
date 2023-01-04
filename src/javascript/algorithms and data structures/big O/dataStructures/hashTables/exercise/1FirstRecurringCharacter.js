//Google question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
// The function has to return the first recurring character in the array.

// Only numbers?
// Check values
// Iterate through the array and save in an object each number as a key and as a value their number of repetition
// Iterate all the object to retrive the high value

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arrayUndefined = [2, 3, 4, 5];
const arrayCharacters = [
  "a",
  "b",
  "c",
  "d",
  "a",
  "e",
  "f",
  "g",
  "h",
  "i",
  "i",
  "i",
];

const mostRecurringNumbers = (array) => {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!map[element]) {
      map[element] = 1;
      continue;
    }

    if (map[element]) {
      map[element] = map[element] + 1;
    }
  }

  const objectKeys = Object.keys(map);
  const highestValue = {
    key: undefined,
    value: 1,
  };
  for (let j = 0; j < objectKeys.length; j++) {
    const element = objectKeys[j];

    if (map[element] > highestValue.value) {
      highestValue.key = element;
      highestValue.value = map[element];
    }

    if (highestValue.value === 1) return undefined;
  }
  console.log(map);
  return highestValue.key;
};

// console.log(mostRecurringNumbers(array2));

// ----------------------------
//Given an array = [2,5,1,2,3,5,1,2,4]:

const firstRecurringNumbersAndrei = (input) => {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    const element = input[i];

    if (map[element] !== undefined) {
      return element;
    } else {
      map[element] = i;
    }
  }
  return undefined;
}; // The Big O of this function is O(n) but implementing the hash table the space complexity is inscreased to O(n)

console.log(firstRecurringNumbersAndrei(array1));
