// Given two sorted arrays, merge them into one sorted array
// example input: [0,3,4,31], [4,6,30]
// example output: [0,3,4,4,6,30,31]

const arrInput1 = [0, 3, 4, 31];
const arrInput2 = [4, 6, 30];

const mergeSortedArrays = (array1, array2) => {
  const orderedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //Check input
  if (array1.length === 0) {
    console.log(array2);
    return array2;
  }

  if (array2.length === 0) {
    console.log(array1);
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      orderedArray.push(array1Item);
      array1Item = array1[i];
      i++;
      continue;
    }
    orderedArray.push(array2Item);
    array2Item = array2[j];
    j++;
  }

  console.log(orderedArray);
  return orderedArray;
};

mergeSortedArrays(arrInput1, arrInput2);

//-----------

