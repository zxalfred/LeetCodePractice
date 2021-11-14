/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sLen = s.length
  const pLen = p.length
  if (sLen === 0 && pLen === 0) return true
  
  const dp = Array.from(
    new Array(sLen + 1),
    () => new Array(pLen + 1).fill(false),
  )

  dp[0][0] = true

  for (let i = 1; i <= pLen; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = true
    } else break
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
      }
    }
  }

  return dp[sLen][pLen]
};
// @lc code=end

