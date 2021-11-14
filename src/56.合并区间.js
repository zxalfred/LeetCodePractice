/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  const result = []
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let curr
  for (const item of intervals) {
    if (!curr) {
      curr = item
    } else if (curr[1] >= item[0]) {
      curr[1] = Math.max(curr[1], item[1])
    } else if (curr[1] >= item[0]) {
      curr[1] = Math.max(curr[1], item[1])
    } else {
      result.push(curr)
      curr = item
    }
  }
  if (curr) result.push(curr)

  return result
}
// @lc code=end
