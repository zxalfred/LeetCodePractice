/*
 * @lc app=leetcode.cn id=375 lang=javascript
 *
 * [375] 猜数字大小 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  const dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(0))

  for (let i = n - 1; i > 0; i--) {
    for (let j = i + 1; j <= n; j++) {
      let min = Number.MAX_SAFE_INTEGER
      for (let k = i; k < j; k++) {
        min = Math.min(min, k + Math.max(dp[i][k - 1], dp[k + 1][j]))
      }
      dp[i][j] = min
    }
  }

  return dp[1][n]
};

// @lc code=end

