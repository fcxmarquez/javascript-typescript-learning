// reference type
[] === [] // false
[1] === [1] // false
// In javascript, arrays are objects.

var obj1 = { value: 10}
var obj2 = obj1
var obj3 = { value: 10}
obj1 === obj2 // true
obj1 === obj3 // false

obj1.value = 20
obj2.value // 20
obj3.value // 10

// The above code is a good example of how objects are passed by reference. When javascript compares two objects, it compares the reference to the object, not the object itself. So, if we compare two objects, it will return true only if they are the same object. The same thing happens with arrays.

var number1 = 10
var number2 = 10

// In this case cause the number is a primitive type, it will be compared by value, not by reference. So, if we compare two numbers, it will return true if they have the same value.


// ----------------------------------------
// Context vs scope
function b () {
  let a = a
}
// When you create a function also you create a scope
// An example of context is when you call this inside a method, this will refer to the object that is calling the method, and not the function itself.

function a() {
  console.log(this)
}
// It refer to the global object, in the browser is the window object.
// So the window object has a new property called a, and that property is a function. window.a()

const object4 = {
  a: function() {
    console.log(this)
  }
}
// now this will refer to the object4 object.
object4.a() // {a: f}

// ----------------------------------------
// Instantiation