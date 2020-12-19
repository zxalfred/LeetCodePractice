/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const row = matrix.length
  if (!row) return false
  const col = matrix[0].length
  if (!col) return false
  let currRow = []
  const heads = matrix.map(arr => arr[0])
  let left = 0
  let right = row - 1
  if (heads[left] === target || heads[right] === target) return true
  if (heads[right] < target) {
    currRow = matrix[right]
  } else {
    while (right - left > 1) {
      const mid = (right + left) >> 1
      const midVal = heads[mid]
      if (midVal === target) return true
      if (midVal > target) {
        right = mid
      } else {
        left = mid
      }
    }
    currRow = matrix[left]
  }
  const rowTailVal = currRow[col - 1]
  if (rowTailVal === target) return true
  if (rowTailVal < target) return false
  left = 0
  right = col - 1
  while (right - left > 0) {
    const mid = (right + left) >> 1
    const midVal = currRow[mid]
    if (midVal === target) return true
    if (midVal > target) {
      right = mid
    } else {
      if (left === mid) return false
      left = mid
    }
  }
  return false
};

// @lc code=end

