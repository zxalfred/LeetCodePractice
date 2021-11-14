/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const startSet = new Set()

  for ([start, end] of paths) {
    startSet.add(start)
  }

  for ([start, end] of paths) {
    if (!startSet.has(end)) return end
  }
};
// @lc code=end

