const expectedSumFromAnArray = (arr, sum) => {
  const arrayLength = arr.length;
  const matchingValue = [];

  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      if (arr[i] + arr[j] === sum) {
        matchingValue.push([arr[i], arr[j]]);
      }
    }
  }

  console.log(matchingValue);
}; // O(n^2)

const improvedExpectedSumFromAnArray = (arr, sum) => {
  const unorderedMap = {};
  const matchingValue = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const difference = sum - currentElement;

    if (unorderedMap[difference]) {
      matchingValue.push([currentElement, difference]);
    }

    unorderedMap[currentElement] = true;
  }

  console.log(matchingValue);
}; // O(n)

// {1: true, 2: true, 4: true, }

const arr = [1, 2, 4, 4];
const arr2 = [1, 2, 4, 5];
const arr3 = [4, 2, 1, 5, 3, 1, 3]; // This array is not sorted, and the funcion above will not work

expectedSumFromAnArray(arr, 6);

improvedExpectedSumFromAnArray(arr, 6);
