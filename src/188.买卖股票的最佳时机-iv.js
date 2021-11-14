/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  if (!prices.length) return 0
  k = Math.min(~~(prices.length / 2), k)
  const profit = []

  for (let n = 0; n <= k; n++) {
    profit[n] = [0, -Infinity]
  }

  profit[0][1] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    for (let n = 0; n <= k; n++) {
      const prevProfit0 = profit[n][0]
      if (n !== 0) {
        profit[n][0] = Math.max(profit[n][0], profit[n - 1][1] + prices[i])
      }
      profit[n][1] = Math.max(profit[n][1], prevProfit0 - prices[i])
    }
  }

  const result = []

  for (let n = 0; n <= k; n++) {
    result.push(profit[n][0])
  }

  return Math.max(...result)
}
// @lc code=end
