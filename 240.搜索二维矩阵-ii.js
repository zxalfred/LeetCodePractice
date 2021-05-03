/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let row = matrix.length
  let col = matrix[0] ? matrix[0].length : 0
  
  let i = row - 1
  let j = 0
  while (i < row && i >= 0 && j >= 0 && j < col) {
    const val = matrix[i][j]
    if (val === target) return true
    if (val > target) {
      i--
    } else {
      j++
    }
  }

  return false
};

// @lc code=end

