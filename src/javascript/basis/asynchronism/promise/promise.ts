const promise = new Promise((resolve, reject) => {
  resolve ('hey')
  reject ('no')
})

const cows = 9

/* ------------ */

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve ('There are too many cows')
  } else {
    reject ('There are not enough cows')
  }
})

countCows.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log('Finally')
})

// then: is used to execute a callback when the promise is resolved
// catch: is used to execute a callback when the promise is rejected
// finally: is used to execute a callback when the promise is resolved or rejected