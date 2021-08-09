/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = [1]
  let result = 1
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    dp[i] = 1
    while (j >= 0) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
      j--
    }
    result = Math.max(result, dp[i])
  }

  return result
};

// @lc code=end

