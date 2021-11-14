/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const l = nums.length
  if (l < 2) return l

  let result = 1
  const dp = new Array(l)
  dp.fill(1)

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(dp[i], result)
  }

  return result
};
// @lc code=end

