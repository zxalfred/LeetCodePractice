/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return 0

  let max = 0
  const row = matrix.length
  const col = matrix[0].length
  const dp = []
  for (let i = 0; i < row; i++) {
    dp[i] = []
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = Number(matrix[i][j])
      } else if (matrix[i][j] === '0') {
        dp[i][j] = 0
      } else {
        dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1
      }
      if (dp[i][j] > max) {
        max = dp[i][j]
      }
    }
  }
  return max * max
}
// @lc code=end
