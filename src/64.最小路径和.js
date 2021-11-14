/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const row = grid.length
  const col = grid[0].length

  const dp = []

  for (let i = 0; i < row; i++) {
    dp[i] = []
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0) {
        dp[0][j] = (dp[0][j - 1] || 0) + grid[i][j]
      } else if (j === 0) {
        dp[i][0] = i === 0 ? grid[i][j] : (dp[i - 1][0] + grid[i][j])
      } else {
        const left = dp[i][j - 1]
        const top = dp[i - 1][j]
        dp[i][j] = Math.min(left, top) + grid[i][j]
      }
    }
  }

  return dp[row - 1][col - 1]
}
// @lc code=end
