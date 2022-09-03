function greeting() {
  let userName = 'John';
  console.log(`Hello ${userName}`);

  if (userName === 'John') { // userName is function scope
    console.log('Hello')
  }
}

console.log(userName); // undefined, can't access userName from outside the function