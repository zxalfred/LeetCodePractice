/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length
  const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const queue = []
  let count = -1
  let hasOrange = false

  const bfs = (queue) => {
    while (queue.length) {
      const nowSize = queue.length
      count++
      for (let n = 0; n < nowSize; n++) {
        const u = queue.shift()
        const i = u[0]
        const j = u[1]
        grid[i][j] = 0
        for (const item of xyDiff) {
          const x = i + item[0]
          const y = j + item[1]
          if (
            x >= 0 && x < rowLen
            && y >= 0 && y < colLen
            && grid[x][y] === 1
          ) {
            queue.push([x, y])
            grid[x][y] = 0
          }
        }
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        hasOrange = true
      }
    }
  }
  if (!queue.length) {
    return hasOrange ? -1 : 0
  }
  bfs(queue)

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }

  return count
}
// @lc code=end
