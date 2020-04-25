/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]

  let dp0 = 0
  let dp1 = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const curr0 = Math.max(dp0, dp1)
    const curr1 = dp0 + nums[i]

    dp0 = curr0
    dp1 = curr1
  }

  return Math.max(dp0, dp1)
};
