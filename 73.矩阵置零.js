/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = matrix.length
  if (row === 0) return []
  const col = matrix[0].length
  const zeroRow = new Array(row).fill(false)
  const zeroCol = new Array(col).fill(false)

  for (let i = 0; i < row; i++)  {
    for (let j = 0; j < col; j++) {
      const val = matrix[i][j]
      if (val === 0) {
        zeroRow[i] = true
        zeroCol[j] = true
      }
    }
  }
  for (let i = 0; i < row; i++) {
    if (zeroRow[i] === true) {
      matrix[i] = new Array(col).fill(0)
    }
  }
  for (let j = 0; j < col; j++) {
    if (zeroCol[j] === true) {
      for (let i = 0; i < row; i++) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};

// @lc code=end

