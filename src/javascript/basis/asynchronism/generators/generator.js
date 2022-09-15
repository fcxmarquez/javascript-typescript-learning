function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['oscar', 'daniel', 'julian', 'juan']);
console.log(it.next())
console.log(it.next())
console.log(it.next())
