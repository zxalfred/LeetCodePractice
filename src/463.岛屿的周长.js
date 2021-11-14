/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const row = grid.length
  const col = grid[0].length
  const move = [[1,0],[-1,0],[0,1],[0,-1]]
  let result = 0

  const dfs = (a, b) => {
    if (grid[a][b] === 0) return
    grid[a][b] = 2
    let side = 4
    move.forEach(move => {
      const x = a + move[0]
      const y = b + move[1]
      if (
        x >=0 && x < row
        && y >=0 && y < col
        && grid[x][y] !== 0
      ) {
        side -= 1
        if (grid[x][y] === 1) {
          dfs(x, y)
        }
      }
    })
    result += side
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j)
      }
    }
  }

  return result
};
// @lc code=end

