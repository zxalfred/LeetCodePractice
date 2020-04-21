var numberOfSubarrays = function(nums, k) {
  const l = nums.length
  let result = 0
  const odd = []
  let cur = 0
  for (let i = 0; i < l; i++) {
    if (nums[i] & 1) odd[++cur] = i
  }
  odd[0] = -1
  odd[++cur] = l

  for (let i = 1; i + k <= cur; ++i) {
    result += (odd[i] - odd[i - 1]) * (odd[i + k] - odd[i + k - 1])
  }

  return result
};

console.log(numberOfSubarrays([0,0,1,0,1,0,0,0], 2))