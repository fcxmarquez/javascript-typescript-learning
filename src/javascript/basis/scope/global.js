// variables

var a; // declaration
var b = "b"; // declaration and assignment
b = 'bb'; // reassignment
var a = 'aa' // redeclaration

// Global scope
var fruit = 'apple'; // global scope

function bestFruit() {
  console.log(fruit); // global scope
}

// This is also globla scope

function countries(){
  country = 'USA';
  console.log(country);
}

// You can asccess global scope variables from inside a function
