/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const rowLen = grid.length
  const colLen = grid[0] ? grid[0].length : 0
  if (!rowLen || !colLen) return 0

  const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let result = 0

  const dfs = (i, j) => {
    const val = grid[i][j]
    if (val === "0") return
    grid[i][j] = "2"
    for (const diff of xyDiff) {
      const x = i + diff[0]
      const y = j + diff[1]
      if (
        x >=0 && x < rowLen
        && y >=0 && y < colLen
        && grid[x][y] !== "2"
      ) {
        dfs(x, y)
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === "1") {
        result++
        dfs(i, j)
      }
    }
  }

  return result
};
// @lc code=end

