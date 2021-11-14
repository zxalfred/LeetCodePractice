/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) return stones[0]
  stones = stones.sort((a, b) => b - a)
  while (stones.length > 1) {
    let diff = Math.abs(stones[0] - stones[1])
    stones = stones.slice(2)
    if (diff > 0) {
      for (let i = 0; i < stones.length; i++) {
        if (diff >= stones[i]) {
          stones.splice(i, 0, diff)
          diff = 0
          break
        }
      }
      if (diff) stones.push(diff)
    }
  }
  return stones[0] || 0
};

// @lc code=end

