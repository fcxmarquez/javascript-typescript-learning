// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "i"];
// should return false.
// ------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

const compareArrayAndFindPair = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    const pair = arr2.includes(arr1[i]);

    if (pair) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}; // Big O(n)

const compareArrayAndFindPair2 = (arr1, arr2) => {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if(!obj[arr1[i]]) {
      const item = arr1[i];
      obj[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    const element = arr2[j];

    if (obj[element]) {
      return console.log("true");
    }
  }

  return console.log(false);
}; // Big O(n)

const compareArrayAndFindPair3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
}; // Big O(n)

compareArrayAndFindPair2(array1, array4);
