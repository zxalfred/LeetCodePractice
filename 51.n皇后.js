/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 1) return []
  const result = []
  const help = (row, col, xySum, xyDiff) => {
    if (row >= n) {
      result.push(col)
      return
    }
    for (let i = 0; i < n; i++) {
      if (xySum.includes(i + row) || xyDiff.includes(i - row) || col.includes(i)) {
        continue
      }
      
      help(row + 1, col.concat(i), xySum.concat(i + row), xyDiff.concat(i - row))
    }
  }
  help(0, [], [], [])

  // format result
  for (let i = 0, l = result.length; i < l; i++) {
    for (let j = 0; j < n; j++) {
      const index = result[i][j]
      let val = new Array(n).fill('.')
      val[index] = 'Q'
      val = val.join('')
      result[i][j] = val
    }
  }

  return result
};
// @lc code=end
