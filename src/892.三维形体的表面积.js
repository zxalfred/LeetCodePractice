/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length
  let cubeCount = 0 // 立方体数量
  let upDownCount = 0 // 上下重合数量
  let sideCount = 0 // 四周重合数量

  const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      cubeCount += grid[i][j]
      upDownCount += grid[i][j] ? ((grid[i][j] - 1) * 2) : 0
      for (const item of xyDiff) {
        const x = i + item[0]
        const y = j + item[1]
        if (
          x >= 0 && x < rowLen
          && y >= 0 && y < colLen
          && grid[x][y]
        ) {
          sideCount += Math.min(grid[x][y], grid[i][j])
        }
      }
    }
  }

  return cubeCount * 6 - upDownCount - sideCount
}
// @lc code=end
