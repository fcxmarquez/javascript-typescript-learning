// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

const string = "Hi My name is Andrei";

function reverseWithMethods(str) {
  const array = str.split("");
  const reversedArray = array.reverse();
  const reversedString = reversedArray.join("");
  console.log(reversedString);
}

// reverseWithMethods(string);
// --------------------------------------------

function reverse(str) {
  const array = [];
  // A loop to reorder the elements
  for (let i = str.length; i >= 0; i--) {
    const element = str[i];
    if (element) {
      array.push(element);
    }
  }

  const reversedArray = array.join("");
  console.log(reversedArray);
}

reverse(string);

//-----------------------
function reverseIASolution(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
  return reversedString;
}

reverseIASolution(string);

// --------------------------------------------
function reverseAndreiSolution(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}