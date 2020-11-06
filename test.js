var firstMissingPositive = function(nums) {
  const { length: l } = nums
  for (let i = 0; i < l; i++) {
    if (nums[i] < 1) {
      nums[i] = l + 1
    }
  }
  for (let i = 0; i < l; i++) {
    const x = nums[i]
    if (x <= l) {
      const index = Math.abs(x) - 1
      nums[index] = -Math.abs(nums[index])
    }
  }
  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) return i + 1
  }
  return l + 1
};

console.log(firstMissingPositive([1,1]))
