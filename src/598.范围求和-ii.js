/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if (!ops.length) return m * n
  let minRow = Infinity
  let minCol = Infinity

  for (const [i, j] of ops) {
    minRow = Math.min(minRow, i)
    minCol = Math.min(minCol, j)
  }

  return minRow * minCol
};
// @lc code=end

