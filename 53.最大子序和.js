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
  let result = nums[0]
  let pre = nums[0]
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    result = Math.max(result, pre)
  }

  return result
};
// @lc code=end

