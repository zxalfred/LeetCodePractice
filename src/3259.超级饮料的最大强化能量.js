/*
 * @lc app=leetcode.cn id=3259 lang=javascript
 *
 * [3259] 超级饮料的最大强化能量
 */

// @lc code=start
/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
let maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
  const dp = [{ a: 0, b: 0 }, { a: energyDrinkA[0], b: energyDrinkB[0] }]

  for (let i = 2; i <= energyDrinkA.length; i++) {
    dp[i] = {}
    dp[i].a = Math.max(
      dp[i - 1].a,
      dp[i - 2].b,
    ) + energyDrinkA[i - 1]
    dp[i].b = Math.max(
      dp[i - 2].a,
      dp[i - 1].b,
    ) + energyDrinkB[i - 1]
  }
  const last = dp.pop()
  return Math.max(last.a, last.b)
}

// @lc code=end
