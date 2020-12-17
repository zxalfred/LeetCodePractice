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
var maxProfit = function(prices, fee) {
  const dp = new Array(prices.length).fill(null).map(() => new Array(2))

  dp[0] = [0, -prices[0]]
  for (let i = 1, l = prices.length; i < l; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i] - fee, dp[i - 1][0])
  }
  return dp[prices.length - 1][0]
};

// @lc code=end

