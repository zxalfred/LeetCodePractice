/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  const l = intervals.length
  if (!l) return 0

  intervals.sort((a, b) => a[0] - b[0])
  const dp = new Array(l).fill(1)

  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[j][1] <= intervals[i][0])
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }

  return l - Math.max(...dp)
};
// @lc code=end

