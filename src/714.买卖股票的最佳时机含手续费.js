/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  let sell = 0
  let buy = -prices[0]
  const len = prices.length
  for (let i = 0; i < len; i++) {
    const newSell = Math.max(buy + prices[i] - fee, sell)
    buy = Math.max(buy, sell - prices[i])
    sell = newSell
  }
  return sell
}

// @lc code=end
