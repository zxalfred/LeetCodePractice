/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let max = 0
  const dp = new Array(s.length)

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (dp[i - 2] || 0) + 2
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0) + 2
      }
      max = Math.max(max, dp[i] || 0)
    }
  }
  return max
}
// @lc code=end
