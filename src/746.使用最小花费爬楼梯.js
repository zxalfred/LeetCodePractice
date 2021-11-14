/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  cost.push(0)
  const l = cost.length
  const dp = [0]
  for (let i = 1; i <= l; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2] === undefined ? Infinity : dp[i - 2]) + cost[i - 1]
  }
  return dp[l]
}
// @lc code=end
