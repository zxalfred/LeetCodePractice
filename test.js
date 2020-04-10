var rob = function(nums) {
  if (nums.length === 1) return nums[0]
  let result = nums[0]
  let flag = true
  for (let i = 1; i < nums.length; i++) {
    if (flag) {
      const temp = result - nums[i - 1] + nums[i] + (nums[i - 2] ? nums[i - 2] : 0)
      if (temp > result) {
        result = temp
        flag = true
      } else {
        flag = false
      }
    } else {
      result += nums[i]
      flag = true
    }
  }
  return result
};

rob([2,7,9,3,1])