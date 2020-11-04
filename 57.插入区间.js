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

  for (i = 0; i < intervals.length; i++) {
    const now = intervals[i]
    if (newInterval[0] < now[0]) {
      if (newInterval[1] < now[0]) {
        result.push(newInterval, now)
        break
      } else if (newInterval[1] <= now[1]) {
        result.push([newInterval[0], now[1]])
        break
      }
    } else if (newInterval[0] <= now[1]) {
      newInterval[0] = now[0]
      if (newInterval[1] <= now[1]) {
        result.push(now)
        break
      } else if (i === intervals.length - 1) {
        result.push(newInterval)
        return result
      }
    } else {
      result.push(now)
      if (i === intervals.length - 1) {
        result.push(newInterval)
      }
    }
  }

  for (i++; i < intervals.length; i++) {
    result.push(intervals[i])
  }

  return result
};


// @lc code=end

