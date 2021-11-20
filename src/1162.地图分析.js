/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
  const len = grid.length
  const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let max = -1
  const queue = []

  const bfs = () => {
    while (queue.length) {
      const levelSize = queue.length
      for (let a = 0; a < levelSize; a++) {
        const u = queue.shift()
        const i = u[0]
        const j = u[1]
        for (const item of xyDiff) {
          const x = i + item[0]
          const y = j + item[1]
          if (
            x >= 0 && x < len
            && y >= 0 && y < len
            && grid[x][y] === 0
          ) {
            const val = grid[i][j] + 1
            grid[x][y] = val
            max = Math.max(max, val)
            queue.push([x, y])
          }
        }
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }

  bfs()

  return max === -1 ? -1 : max - 1
}
// @lc code=end
