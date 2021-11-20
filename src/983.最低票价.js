/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const memo = new Array(366)
  const dayset = new Set()

  for (const d of days) {
    dayset.add(d)
  }

  const dp = (i) => {
    if (i > 365) return 0

    if (memo[i]) {
      return memo[i]
    }

    if (dayset.has(i)) {
      memo[i] = Math.min(Math.min(dp(i + 1) + costs[0], dp(i + 7) + costs[1]), dp(i + 30) + costs[2])
    } else {
      memo[i] = dp(i + 1)
    }
    return memo[i]
  }

  return dp(1)
}
// @lc code=end
