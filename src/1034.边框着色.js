/*
 * @lc app=leetcode.cn id=1034 lang=javascript
 *
 * [1034] 边框着色
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
const colorBorder = function (grid, row, col, color) {
  const set = new Set()
  const colorSet = new Set()
  const rowCount = grid.length
  const colCount = grid[0].length
  const steps = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const dfs = (i, j) => {
    let isBorder = false
    for (const step of steps) {
      const x = i + step[0]
      const y = j + step[1]
      if (x >= 0 && x < rowCount && y >= 0 && y < colCount) {
        if (grid[x][y] !== grid[i][j]) {
          isBorder = true
        } else if (!set.has(`${x},${y}`)) {
          set.add(`${x},${y}`)
          dfs(x, y)
        }
      } else {
        isBorder = true
      }
    }

    if (isBorder) {
      colorSet.add(`${i},${j}`)
    }
  }

  set.add(`${row},${col}`)
  dfs(row, col)

  for (const item of colorSet) {
    const cord = item.split(',')
    grid[cord[0]][cord[1]] = color
  }

  return grid
}

// @lc code=end
