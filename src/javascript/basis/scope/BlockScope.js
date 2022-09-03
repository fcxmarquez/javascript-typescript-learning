function fruits() {
  if(true){
    var fruit1 = "apple";
    let fruit2 = "banana"; // let is block scope
    const fruit3 = "orange"; // const is block scope
  }
  console.log(fruit1); // is accessible
  console.log(fruit2); // is not accessible
  console.log(fruit3); // is not accessible
}