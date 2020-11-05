/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval]
  const result = []
  let i
  let settled = false

  for (i = 0; i < intervals.length; i++) {
    const now = intervals[i]
    if (newInterval[0] < now[0]) {
      if (newInterval[1] < now[0]) {
        if (settled) {
          result.push(now)
        } else {
          result.push(newInterval, now)
          settled = true
        }
      } else if (newInterval[1] <= now[1]) {
        result.push([newInterval[0], now[1]])
        settled = true
      }
    } else if (newInterval[0] <= now[1]) {
      newInterval[0] = now[0]
      if (newInterval[1] <= now[1]) {
        result.push(now)
        settled = true
      }
    } else {
      result.push(now)
    }
  }

  if (!settled) {
    result.push(newInterval)
  }

  return result
};
// @lc code=end

