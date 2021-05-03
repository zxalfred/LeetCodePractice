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
  let start = 0

  while (start <= Math.min(row, col) - 1) {
    let left = start
    let right = row - 1
    if (matrix[left][start] === target) return true
    if (matrix[right][start] === target) return true
    while (true) {
      let mid = ~~((left + right) >> 1)
      if (mid === left) break
      const val = matrix[mid][start]
      if (val === target) return true
      if (target > val) {
        left = mid
      } else {
        right = mid
      }
    }
    row = right + 1
    left = start
    right = col - 1
    if (matrix[start][right] === target) return true
    while (true) {
      let mid = ~~((left + right) >> 1)
      if (mid === left) break
      const val = matrix[start][mid]
      if (val === target) return true
      if (target > val) {
        left = mid
      } else {
        right = mid
      }
    }
    col = right + 1
    
    start++
  }

  return false
};

// @lc code=end

