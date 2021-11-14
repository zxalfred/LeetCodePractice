/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let result = 0
  let prev = 0
  for (const time of timeSeries) {
    if (time >= prev) {
      result += duration
      prev = time + duration
    } else if (time + duration > prev) {
      result += time + duration - prev
      prev = time + duration
    }
  }

  return result
};

// @lc code=end

