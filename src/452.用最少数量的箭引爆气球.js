/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  const arr = points.sort((a, b) => a[0] - b[0])
  let prevTail = -Infinity
  let result = 0

  for (const [i, j] of arr) {
    if (i > prevTail) {
      result++
      prevTail = j
    } else {
      prevTail = Math.min(prevTail, j)
    }
  }

  return result
}
// @lc code=end
