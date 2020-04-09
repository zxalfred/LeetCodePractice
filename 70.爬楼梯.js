/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n
  const memo = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
};
// @lc code=end

