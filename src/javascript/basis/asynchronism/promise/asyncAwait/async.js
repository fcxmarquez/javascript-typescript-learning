const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("hello");
};

console.log("Before");
// The same function but without async await
// fnAsync()
//   .then((value) => console.log(value))
//   .then(() => console.log("hello"));
anotherFn();
console.log("After");
