/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  if (s[0] === '0') return 0
  const l = s.length
  const dp = new Array(l)
  for (let i = 1; i < l; i++) {
    dp[i] = [0, 0]
  }
  dp[0] = [0, 1] // 0 为与前面的结合；1 为独立
  for (let i = 1; i < l; i++) {
    // dp[i][0] 与前面结合
    if (dp[i - 1][1] && Number(s[i - 1] + s[i]) < 27) {
      dp[i][0] = dp[i - 1][1]
    }
    // dp[i][1] 独立
    if (s[i] !== '0') {
      dp[i][1] = dp[i - 1][0] + dp[i - 1][1]
    }
  }
  return dp[l - 1][0] + dp[l - 1][1]
}

// @lc code=end
