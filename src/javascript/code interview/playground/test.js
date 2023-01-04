const solution = (n) => {
  const array = new Array(n+1)
  array[1] = 1
  array[2] = 2
  array[3] = 4

  for (let i = 4; i <= n; i++ {
      array[i] = array[i-1] + array[i-2] + array[i-3]
  }

  return array[n]
};
// 