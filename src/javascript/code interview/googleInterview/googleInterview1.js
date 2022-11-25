const expectedSumFromAnArray = (arr, sum) => {
  const arrayLength = arr.length;
  const matchingValue = [];

  for (let i = 0; i < arrayLength; i++) {
    console.log(i);
    for (let j = i; j < arrayLength; j++) {
      if (arr[i] + arr[j] === sum) {
        matchingValue.push([arr[i], arr[j]]);
      }
    }
  }

  console.log(matchingValue);
}; // O(n^2)

const improvedExpectedSumFromAnArray = (arr, sum) => {
  const arrayLength = arr.length;
  const matchingValue = [];

  for (let i = 0; i < arrayLength; i++) {
    const diff = sum - arr[i];
    if (arr.indexOf(diff) > -1) {
      matchingValue.push([arr[i], diff]);
    }
  }

  console.log(matchingValue);
}; // O(n)

const arr = [1, 2, 4, 4];
const arr2 = [1, 2, 4, 5];

expectedSumFromAnArray(arr, 6);

improvedExpectedSumFromAnArray(arr, 6);
