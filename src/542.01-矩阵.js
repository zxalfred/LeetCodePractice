/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const set = new Set()
  const result = []
  for (let i = 0; i < rowLen; i++) {
    result.push([])
  }

  const bfs = (queue) => {
    let count = 0
    while (queue.length) {
      const levelSize = queue.length

      for (let n = 0; n < levelSize; n++) {
        const u = queue.shift()
        const i = u[0]
        const j = u[1]
        if (matrix[i][j] === 0) return count
        set.add(`${i},${j}`)
        for (const item of xyDiff) {
          const x = i + item[0]
          const y = j + item[1]
          if (
            x >= 0 && x < rowLen
            && y >=0 && y < colLen
            && !set.has(`${x},${y}`)
          ) {
            queue.push([x, y])
          }
        }
      }
      count++
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      set.clear()
      result[i][j] = bfs([[i, j]])
    }
  }

  return result
};
// @lc code=end

