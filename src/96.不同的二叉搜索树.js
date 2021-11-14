/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const dp = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    let result = 2 * dp[i - 1]
    for (let j = 1; j <= i - 1; j++) {
      const left = j - 1
      const right = i - j
      result += dp[left] * dp[right]
    }
    dp[i] = result
  }

  return dp[n]
}
// @lc code=end
