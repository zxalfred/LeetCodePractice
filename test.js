const reverse = (nums, index) => {
  const l = nums.length
  if (index >= l - 1) return nums
  let left = index
  let right = l - 1
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}

var nextPermutation = function(nums) {
  const l = nums.length
  if (l < 2) return nums
  let i = l - 2
  while (i >= 0) {
    for (let j = l - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        reverse(nums, i + 1)
        return nums
      }
    }
    i--
  }

  reverse(nums, 0)
  return nums
}
