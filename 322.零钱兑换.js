/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  if (coins.length === 0) return -1 
  const dp = new Array(amount + 1)
  dp.fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const prevIndex = i - coins[j]
      if (prevIndex >= 0) {
        dp[i] = Math.min(dp[prevIndex] + 1, dp[i])
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

