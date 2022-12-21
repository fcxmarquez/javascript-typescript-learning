// reference type
([] === [][1]) === // false
  [1]; // false
// In javascript, arrays are objects.

var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };
obj1 === obj2; // true
obj1 === obj3; // false

obj1.value = 20;
obj2.value; // 20
obj3.value; // 10

// The above code is a good example of how objects are passed by reference. When javascript compares two objects, it compares the reference to the object, not the object itself. So, if we compare two objects, it will return true only if they are the same object. The same thing happens with arrays.

var number1 = 10;
var number2 = 10;

// In this case cause the number is a primitive type, it will be compared by value, not by reference. So, if we compare two numbers, it will return true if they have the same value.

// ----------------------------------------
// Context vs scope
function b() {
  let a = a;
}
// When you create a function also you create a scope
// An example of context is when you call this inside a method, this will refer to the object that is calling the method, and not the function itself.

function a() {
  console.log(this);
}
// It refer to the global object, in the browser is the window object.
// So the window object has a new property called a, and that property is a function. window.a()

const object4 = {
  a: function () {
    console.log(this);
  },
};
// now this will refer to the object4 object.
object4.a(); // {a: f}

// ----------------------------------------
// Instantiation
//When you make a copy of an object and reuse the code.
class Player {
  constructor(name, type) {
    console.log('player', this)
    this.name = name;
    this.type = type;
  } // This is the constructor method, it will be called when you create a new instance of the class.

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  // Extends allow us to inherit all the properties and methods from the Player class.
  constructor(name, type) {
    super(name, type); // super is a reference to the parent class.
    console.log('wizard', this);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer"); // This is the instantiation of the Wizard class.
const wizard2 = new Wizard("Shawn", "Dark Magic");
// In the console this will show only the wizard object, because the wizard object is the one that is being instantiated.

wizard2.play()
wizard2.introduce()

// Classical Inheritance
var PlayerClassical = function (name, type) {
  this.name = name;
  this.type = type;
}

PlayerClassical.prototype.introduce = function () {
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1Classical = new PlayerClassical("Shelly", "Healer");
var wizard2Classical = new PlayerClassical("Shawn", "Dark Magic");

wizard1.play = function () {
  console.log(`WEEEEEE I'm a ${this.type}`);
}

wizard2.play = function () {
  console.log(`WEEEEEE I'm a ${this.type}`);
}