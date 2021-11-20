/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  if (nums.length === 1) return nums[0]
  let prevMax = nums[0]
  let prevMin = prevMax
  let result = prevMax

  for (let i = 1; i < nums.length; i++) {
    const curMin = Math.min(prevMax * nums[i], prevMin * nums[i], nums[i])
    const curMax = Math.max(prevMax * nums[i], prevMin * nums[i], nums[i])

    prevMax = curMax
    prevMin = curMin

    result = Math.max(curMax, result)
  }
  return result
}
// @lc code=end
