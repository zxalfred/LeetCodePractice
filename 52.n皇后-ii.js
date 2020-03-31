/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  if (n < 1) return 0
  let result = 0
  const help = (row, col, xySum, xyDiff) => {
    if (row >= n) {
      result++
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

  return result
};
// @lc code=end

