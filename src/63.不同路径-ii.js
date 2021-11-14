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
const uniquePathsWithObstacles = function (obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  var result = Array(m).fill(0);
  result[0] = 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        result[j] = 0;
      } else if (j > 0) {
        result[j] += result[j - 1];
      }
    }
  }
  return result[m - 1];
};
// @lc code=end

