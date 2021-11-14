/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  const set = new Set(candyType)
  return Math.min(set.size, candyType.length / 2)
};

// @lc code=end

