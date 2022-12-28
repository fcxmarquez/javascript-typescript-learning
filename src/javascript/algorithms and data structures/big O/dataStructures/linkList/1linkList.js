const basket = ["apples", "grapes", "pears"];

// linked list: apples --> grapes --> pears The arrows are pointers

// apples
// 8947 --> grapes
//          8742 --> pears
//                   372 --> null
// The numbers are the memory address of the next item in the list

let obj1 = { a: true };
let obj2 = obj1;
// This work like a pointer because it's a reference. You reference the obj2 to obj1 instead of create a new space memory.
obj1.a = "hello";
// The obj2 also change because it's a reference.
delete obj1; // This delete the obj1 but not the obj2 because it's a reference. So deleting obj1 still have in memory the obj2 because there is a reference pointting to the obj deleted. Thanks to the garbage collector. In low level languages you have to manually handle the memory.

// console.log('1', obj1);
console.log("2", obj2);


