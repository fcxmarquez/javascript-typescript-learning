class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    } // Despite here is a loop, the big O is O(1) because the loop will always run the same number of times.
    return hash;
  } // The undesrscore is a convention to indicate that this is a private method. In javascript there is no way to make a method private.

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    return this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket.length > 1) {
      for (let i = 0; i < currentBucket.length; i++) {
        const element = currentBucket[i];

        if (element[0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return currentBucket[0][1];
  }
} //O(1) - constant time but O(n) - linear time if there is a collision

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));

// --------
class HashTableAndrei {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // The undesrscore is a convention to indicate that this is a private method. In javascript there is no way to make a method private.
}
