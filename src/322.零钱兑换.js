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
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const index = i - coins[j]
      if (index >= 0) {
        dp[i] = Math.min(dp[i], dp[index] + 1)
      }
    }
  }

  const result = dp.pop()
  return isFinite(result) ? result : -1
}

// @lc code=end
