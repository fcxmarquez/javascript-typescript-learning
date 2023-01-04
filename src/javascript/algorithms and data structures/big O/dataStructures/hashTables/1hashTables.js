let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhh!');
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)
// Because it is a hash table, the operations are quick and constant time

// The collision is when two keys are the same, and the hash table has to store them in the same place

// ------------------ //
// In a hash table, the key and the value can be any type of data structure, even a function.
// Aslo from ES6, we have the Map data structure, which is a hash table and the Sets data structure, which is a hash table with no values.

const a = new Map(); // The difference between a map and a object is that a map can have any data type as a key, and a object can only have strings as keys. An also it maintains insertion order, like an array.

const b = new Set(); // It only store keys, and no values. It is a hash table with no values.