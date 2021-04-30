/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  if (stones[1] !== 1) return false
  const l = stones.length
  const dp = new Array(l)
  for (let i = 0; i < l; i++) {
    dp[i] = []
  }
  dp[1] = []
  const diffs = [-1, 0, 1]
  for (let i = 2; i < l; i++) {
    for (let j = i - 1; j > 0; j--) {
      const gap = stones[i] - stones[j]
      const optionSteps = dp[j]
      diffs.some(diff => {
        if (optionSteps.has(gap + diff)) {
          dp[i].add(gap)
          return true
        }
      })
    }
  }

  return !!dp[l - 1].size
};
// @lc code=end

