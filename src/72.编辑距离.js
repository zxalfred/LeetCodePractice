/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const n = word1.length
  const m = word2.length

  if (!n || !m) {
    return Math.max(n, m)
  }

  const dp = []
  for (let i = 0; i <= n; i++) {
    dp[i] = []
    for (let j = 0; j <= m; j++) {
      if (i === 0) {
        dp[i].push(j)
      } else {
        dp[i].push(Infinity)
      }
    }
    dp[i][0] = i
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1),
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
      )
    }
  }

  return dp[n][m]
};
// @lc code=end

