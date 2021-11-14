/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   if (!prices.length) return 0

//   const profit = []

//   for (let i = 0; i < prices.length; i++) {
//     profit[i] = [
//       [0, -Infinity],
//       [0, -Infinity],
//       [0, -Infinity],
//     ]
//   }

//   // 天数，卖出次数， 是否持有
//   profit[0][0][0] = 0
//   profit[0][0][1] = -prices[0]

//   for (let i = 1; i < prices.length; i++) {
//     profit[i][0][0] = profit[i - 1][0][0]
//     profit[i][0][1] = Math.max(profit[i - 1][0][1], profit[i - 1][0][0] - prices[i])

//     profit[i][1][0] = Math.max(profit[i - 1][1][0], profit[i - 1][0][1] + prices[i])
//     profit[i][1][1] = Math.max(profit[i - 1][1][1], profit[i - 1][1][0] - prices[i])

//     profit[i][2][0] = Math.max(profit[i - 1][2][0], profit[i - 1][1][1] + prices[i])
//   }

//   const end = prices.length - 1
//   return Math.max(profit[end][0][0], profit[end][1][0], profit[end][2][0])
// };
var maxProfit = function(prices) {
  let release1 = 0
  let release2 = 0
  let hold1 = -Infinity
  let hold2 = -Infinity

  for (const item of prices) {
    release2 = Math.max(release2, hold2 + item)
    hold2 = Math.max(hold2, release1 - item)
    release1 = Math.max(release1, hold1 + item)
    hold1 = Math.max(hold1, -item)
  }

  return release2
}
// @lc code=end

