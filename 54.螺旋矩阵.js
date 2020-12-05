/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const row = matrix.length
  if (!row) return []
  const col = matrix[0].length
  if (!col) return []
  const result = []
  let maxRound = Math.max(Math.min(row, col) - 2, 0)

  for (let r = 0; r <= maxRound; r++) {
    const minX = 0 + r
    const maxX = row - r - 1
    const minY = 0 + r
    const maxY = col - r - 1
    let x = minX
    let y = minY
    while (y <= maxY) {
      result.push(matrix[x][y])
      y++
    }
    y--
    x++
    if (x > maxX) break
    while (x <= maxX) {
      result.push(matrix[x][y])
      x++
    }
    x--
    y--
    if (y < minY) break
    while (y >= minY) {
      result.push(matrix[x][y])
      y--
    }
    y++
    x--
    while (x >= minX + 1) {
      result.push(matrix[x][y])
      x--
    }
  }

  return result
};
// @lc code=end

