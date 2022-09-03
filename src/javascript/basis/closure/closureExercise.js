function greeting() {
  let username = "Oscar";

  function displayUserName() {
    return `Hello ${username}`;
  }

  return displayUserName;
}

const g = greeting();
console.log(g) // Access to the lexical scope of the function
console.log(g()); // Get the value of the function from the lexical scope