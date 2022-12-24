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