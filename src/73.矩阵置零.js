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
const setZeroes = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let isFirstColZero = false

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      isFirstColZero = true
    }
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let j = 1; j < col; j++) {
      matrix[0][j] = 0
    }
  }
  if (isFirstColZero) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0
    }
  }
}

// @lc code=end
