function twoSum(nums?: number[], target?: number): number[] {
  const map = {}

  for(let i = 0; i < nums.length; i++) {
    const element = nums[i]
    map[element] = i
  }

  console.log(map)

  return []
};

