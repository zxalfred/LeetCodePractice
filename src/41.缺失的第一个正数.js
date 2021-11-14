/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
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
// @lc code=end

