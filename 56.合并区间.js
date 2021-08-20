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
var merge = function(intervals) {
  const arr = intervals.sort((a, b) => a[0] - b[0])
  const result = []
  let curr = null
  for (const item of arr) {
    if (!curr) {
      curr = item
    } else if (curr[1] >= item[0]) {
      curr[1] = Math.max(curr[1], item[1])
    } else {
      result.push(curr)
      curr = item
    }
  }
  if (curr) result.push(curr)
  return result
};
// @lc code=end

