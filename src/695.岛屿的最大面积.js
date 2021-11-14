/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  if (!grid.length || !grid[0].length) return 0
  const rowLen = grid.length
  const colLen = grid[0].length
  const xyDiff = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  let maxArea = 0

  const dfs = (i, j) => {
    let area = 1
    grid[i][j] = 0
    for (const item of xyDiff) {
      const x = i + item[0]
      const y = j + item[1]
      if (
        x >= 0 && x < rowLen
        && y >= 0 && y < colLen
        && grid[x][y] === 1
      ) {
        area += dfs(x, y)
      }
    }
    return area
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j)
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}
// @lc code=end
