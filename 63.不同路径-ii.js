/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0] ? obstacleGrid[0].length : 0

  // 特殊情况判断
  if (obstacleGrid[0][0] === 1) return 0
  if (obstacleGrid[row - 1][col - 1] === 1) return 0

  // 初始化 dp 数组
  const dp = []
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(col).fill(0)
  }
  dp[0][0] = 1
  for (let j = 1; j < col; j++) {
    if (obstacleGrid[0][j] !== 1) {
      dp[0][j] = dp[0][j - 1]
    }
  }
  for (let i = 1; i < row; i++) {
    if (obstacleGrid[i][0] !== 1) {
      dp[i][0] = dp[i - 1][0]
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[row - 1][col - 1]
};
// @lc code=end

