const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'hank', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'nemo'];
const manyNemos = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
      break
    }
  }


}

findNemo(everyone);

// Big O is how we measure the performance of an algorithm
// Big O is a way to talk formally about how the runtime of an algorithm grows as the inputs grow
// Big O is a way to classify how well an algorithm scales