const sum = (a, b) => a + b;

const calc = (a, b, callback) => callback(a, b);

console.log(calc(1, 2, sum));

setTimeout(() => {
  console.log("Hola Javascript");
}, 2000);

const greettings = (name) => {
  console.log(`Hello ${name}`);
};

setTimeout(greettings, 2000, "Javascript");
