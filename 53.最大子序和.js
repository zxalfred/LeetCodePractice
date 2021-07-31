/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0]
  let result = nums[0]
  let prev = nums[0]
  for (let i = 1; i < nums.length; i++) {
    prev = prev > 0 ? prev + nums[i] : nums[i]
    result = Math.max(prev, result)
  }
  return result
};
// @lc code=end

