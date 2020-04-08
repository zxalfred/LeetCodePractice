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
  let minPrice = Infinity

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else if (price - minPrice > result) {
      result = price - minPrice
    }
  }

  return result
};
// @lc code=end

