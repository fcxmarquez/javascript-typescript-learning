const memo = [];

function memoFactorial(n) {
  if (n === 1) {
    return 1;
  } else if (memo[n]) {
		console.log(`memo(${n + 1}) is in memo[${n}]`);
  } else if (!memo[n]) {
    memo[n] = n * memoFactorial(n - 1);
    
  }
  return memo[n];
}

console.log(memoFactorial(4));
console.log(memoFactorial(8));
console.log(memo);

export {};
