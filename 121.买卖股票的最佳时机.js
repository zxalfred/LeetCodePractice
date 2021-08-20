/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0
  let prevMin = Infinity
  for (const val of prices) {
    if (val < prevMin) {
      prevMin = val
    } else {
      result = Math.max(result, val - prevMin)
    }
  }

  return result
};
// @lc code=end

